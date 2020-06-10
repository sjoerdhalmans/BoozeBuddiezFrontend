<template>
  <div>
    <h3>{{ feature.properties }}</h3>
    <button @click="popupClicked">Learn more</button>
  </div>
</template>
 
<script>
import Vue from 'vue'
export default Vue.extend({
      data(){
      return{
        fullbar: null,
      }
    },
    mounted(){
    },
  props: {
    feature: {
      required: true,
      type: Object,
    },
  },
  methods: {
    popupClicked() {
      alert('Learn more clicked')
    },
  },
})
</script>