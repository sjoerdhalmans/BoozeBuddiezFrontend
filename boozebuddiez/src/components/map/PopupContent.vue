<template>
  <div>
    <div v-if="!showDetails">
      <h3>{{ feature.properties.title }}</h3>
      <button @click="Details">Learn more</button>
    </div>
     <div v-else>
      <h3>{{ feature.properties.title }}</h3>
      <button @click="Details">Show less</button>
    </div>
  </div>
</template>
 
<script>
import Vue from 'vue'
export default Vue.extend({
  props: {
    feature: {
      required: true,
      type: Object,
    },
    data(){
      return{
        showDetails: false,
      }
    },
  },
  methods: {
    Details() {
      this.showDetails = !this.showDetails
    },
  },
})
</script>