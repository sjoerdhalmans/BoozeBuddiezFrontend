<template>
      <div>
    <v-card-text>
        <v-container>
        <v-form class="form_class"
    ref="form"
    lazy-validation
  >
    <v-text-field
      label="Name"
      v-model="Beer.name"
      required
    ></v-text-field>
    <v-text-field
      label="Brand"
      v-model="Beer.brand"
      required
    ></v-text-field>
    <v-text-field
      label="ABV %"
      v-model="Beer.ABV"
      required
    ></v-text-field>
        </v-form>
        </v-container>
    </v-card-text>
    <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="close">Close</v-btn>
        <v-btn color="blue darken-1" text @click="save">Save</v-btn>
    </v-card-actions>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      Beer:{
        name: null,
        ABV: null,
        brand: null
      }
    }
  },
methods:{
         close(){
        this.$store.dispatch("SaveModelState", false)
      },
      save(){
        this.$store.dispatch("SaveModelState", false)
        this.sendToDB()
      },
      sendToDB(){
      axios.post("http://217.101.44.31:8083/api/public/beer/addBeer", {
            alcoholPercentage: this.Beer.ABV,
            brand: this.Beer.brand,
            name: this.Beer.name

            }).then(respone => {
                if (respone.status == 200) {
                  var beers = this.$store.getters.getBeerCollection
                  beers.push(respone.data)

            this.$store.dispatch("SaveBeerCollection", beers);
            }
          });
      },
      }
}
</script>

<style>

</style>