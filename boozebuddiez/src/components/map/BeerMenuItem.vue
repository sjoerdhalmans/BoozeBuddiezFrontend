<template>
  <div class="row">
    <div class="col-5">{{this.beer.beer.name}}</div>
    <div class="col-3">{{this.beer.beer.brand}}</div>
    <div class="col-2">{{this.beer.beer.alcoholPercentage}}</div>
    <div class="col-2">€ {{this.beer.price}}</div>
  </div>
</template>

<script>
export default {
    props: ['beer']
}
</script>

<style>

</style>