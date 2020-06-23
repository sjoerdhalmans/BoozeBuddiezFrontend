<template>
  <div>
    <div class="row">
      <div class="col-12">Results</div>
    </div>
    <div v-for="bar in this.results" :key="bar.id">
      <resultcard v-bind:bar="bar" />
    </div>
    <v-btn id="return" @click="ResetSearch"></v-btn>
  </div>
</template>

<script>
import resultcard from "./resultCard";
export default {
  components: {
    resultcard
  },
  computed: {
    results() {
      return this.$store.getters.getSearchResult;
    }
  },
  methods: {
    ResetSearch() {
      this.$store.dispatch("SaveSearchResult", null);
    }
  }
};
</script>

<style>
#return {
  background-position: center;
  background-size: auto;
  background-image: url("../../../assets/images/return_icon.png");
}
</style>