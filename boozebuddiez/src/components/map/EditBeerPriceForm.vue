<template>
  <div v-on:click="changeContent(0)">back</div>
</template>

<script>
import store from '../../store'
export default {
methods:{
      changeContent(index){
      store.dispatch("SavePopupState", index)
    },
}
}
</script>

<style>

</style>