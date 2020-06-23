<template>
  <div>
<div class="row">
        <div class="col-12">Add Beer to the bar</div>
    </div>
    <div>
               <v-form class="form_class"
    ref="form"
    lazy-validation
  >
    <v-row>
        <v-col cols="12" sm="6">
            <v-autocomplete
                label="List of beers"

            ></v-autocomplete>
        </v-col>
    </v-row>
    <v-text-field
      label="price of 1 beer"
      v-model="Data.price"
      required
    ></v-text-field>
  </v-form>
    </div>
    <div class="row">
        <div class="col-12" v-on:click="saveChanges()"> Save </div>
    </div>
</div>
</template>

<script>
import store from '../../store'
export default { 
 props: ['bar'],
 data(){
     return{
         Data:{
             barId: 0,
             beerId: 0,
             price: 0
         },
     }
 },
 computed:{
     beerlist(){
       return store.getters.getBeerCollection.filter(beer => this.beernames.push(beer.name))
     }
 },
methods:{
    saveChanges(){
        this.changeContent(0)
    },
      changeContent(index){
      store.dispatch("SavePopupState", index)
    },
}
}
</script>

<style>

</style>