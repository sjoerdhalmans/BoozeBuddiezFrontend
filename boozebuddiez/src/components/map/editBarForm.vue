<template>
<div>
<div class="row">
        <div class="col-12">Edit the bar details</div>
    </div>
    <div>
               <v-form class="form_class"
    ref="form"
    lazy-validation
  >
    <v-text-field
      label="Bar name"
      v-model="bar.name"
      required
    ></v-text-field>
    <v-text-field
      label="Address"
      v-model="bar.adress"
      required
    ></v-text-field>
    <v-text-field
      label="Zipcode"
      v-model="bar.zipcode"
      required
    ></v-text-field>
    <v-text-field
      label="Telephone Number"
      v-model="bar.telephoneNumber"
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
import axios from 'axios'
export default {
  props: ['bar'],
methods:{
  saveChanges(){
    axios
    .put("http://217.101.44.31:8084/api/public/bar/editBar",{
      adress: this.bar.adress,
      beers: this.bar.beers,
      id: this.bar.id,
      latitude: this.bar.latitude,
      longitude: this.bar.longitude,
      name: this.bar.name,
      telephoneNumber: this.bar.telephoneNumber,
      zipcode: this.bar.zipcode
    }).then(respone =>{
      if(respone.status === 200){
                this.$toasted.show("The bar details changed successfully", {
                    type: "success",
                    theme: "toasted-primary",
                    position: "bottom-right",
                    duration: 2500,
                });
      }
    }).finally(() =>{
      this.loadbars
    })
    this.changeContent(0)
  },
  loadbars(){
      axios
      .get('http://217.101.44.31:8084/api/public/bar/getAllBars')
      .then(data => (
        this.$store.dispatch("SaveBarCollection", data.data.bars)
        ))
  },
  changeContent(index){
      store.dispatch("SavePopupState", index)
    },
}
}
</script>

<style>

</style>