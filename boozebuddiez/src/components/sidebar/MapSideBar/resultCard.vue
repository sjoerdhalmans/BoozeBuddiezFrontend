<template>
<div @click="SetMapFocus">
  <div class="row" >
    <div class="col-1" />   
      <div class="col-5">
      {{bar.name}}
    </div>
          <div class="col-5">
      {{bar.zipcode}}
    </div>
  </div>
  <div class="row">
      <div class="col-1" />
      <div class="col-5">
      {{bar.adress}}
    </div>
      <div class="col-5">
      {{bar.telephoneNumber}}
    </div></div>
    <hr>
</div>
</template>

<script>
export default {
props: ['bar'],
methods:{
    SetMapFocus(){
        var save = {
            long: this.bar.longitude,
            lat: this.bar.latitude
        }
        this.$store.dispatch("SaveBarFocus", save)
    }
}
}
</script>

<style>

</style>