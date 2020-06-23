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
      <div v-for="beer in beerlist" :key="beer.id">
        <div>{{beer.name}}</div>
      </div>
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
       items:["aaaaaa","bbbbbb"],
         Data:{
             barId: 0,
             beerId: 0,
             price: 0
         },
     }
 },
 computed:{
     beerlist(){
       return store.getters.getBeerCollection
     }
 },
methods:{
   methodToRunOnSelect(payload) {
            this.object = payload;
          },
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