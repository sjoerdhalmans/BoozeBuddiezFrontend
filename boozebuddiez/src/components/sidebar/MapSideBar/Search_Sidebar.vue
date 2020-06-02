<template>
  <div>
      <div class="row">
        <div class="col-12"><p>Search a bar!</p></div>
      </div>
       <v-form class="form_class"
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      label="Zipcode"
      v-model="model.zipcode"
      required
    ></v-text-field>
    <v-text-field
      label="Address"
      v-model="model.address"
      required
    ></v-text-field>
    <v-text-field
      label="Bar Name"
      v-model="model.barname"
      required
    ></v-text-field>
    <v-text-field
      label="Average Rating"
      v-model="model.averageRating"
      required
    ></v-text-field>

    <v-btn id="search"
      @click="filterBars"
    >
    </v-btn>
  </v-form>
  </div>
</template>

<script>
export default {
name:'Search_sidebar',
data(){
    return{
        model: {
            zipcode: null,
            barname: null,
            averageRating: null,
            address: null
        }
    }
},
methods:{
        filterBars(){
            console.table(this.model)
             var result = this.$store.getters.getBarCollection.filter(bar => bar.zipcode == this.model.zipcode)
             console.table(result)
             this.$store.dispatch("SaveSearchResult", result)
        }
    }
}
</script>

<style>
.form_class{
    width: 75%;
}
#search{
    background-position: center;
    background-size: auto;
    background-image: url('../../../assets/images/search_icon.png');
}
</style>