<template>
  <div>
    <div id="nav">
      <Navigation />
    </div>

    <v-container>
      <v-row>

        <v-col cols="12" sm="6" md="6" style="height: auto;">
          <newbarratingmodel></newbarratingmodel>
          <div class="row">
            <h3 class="col-md-6 col-sm-6" style="text-align: left">My bar ratings</h3>
          </div>
          <div class="bar-rating-list">
            <div v-for="barrating in this.barrating.barRatings" :key="barrating.id">
              <barratingcard v-bind:rating="barrating" />
            </div>
          </div>
          
        </v-col>
        

        <v-col cols="12" sm="6" md="6">
          <addnewbeerrating></addnewbeerrating>
          <div class="row">
            <h3 class="col-6" style="text-align: left">My beer ratings</h3>
          </div>
          <div class="beer-rating-list">
            <div v-for="beerrating in this.beerrating.beerRatings" :key="beerrating.id">
              <beerratingcard v-bind:rating="beerrating" />
            </div>
          </div>
          
        </v-col>
        

      </v-row>
    </v-container>
  </div>
</template>

<script>
import "../assets/css/main.css";
import Navigation from "@/components/Navigation.vue";
import barratingcard from "@/components/rating/barratingcard.vue";
import beerratingcard from "@/components/rating/beerratingcard.vue";
import addnewbeerrating from "@/components/rating/beer/addnewbeerrating.vue";
import newbarratingmodel from "@/components/rating/newbarratingmodel.vue";
export default {
  name: "App",

  components: {
    Navigation,
    barratingcard,
    beerratingcard,
    newbarratingmodel,
    addnewbeerrating
  },
  computed: {
    barrating() {
      return this.$store.getters.getratingcollection;
    },

    beerrating() {
      return this.$store.getters.getratingcollection;
    }
  },

  data() {
    return {};
  },

  mounted() {}
};
</script>
a
<style>
.content {
  margin-top: 2%;
  word-wrap: break-word;
}

.addbutton {
  text-decoration: underline;
  cursor: pointer;
}

.bar-rating-list {
  margin-top: 1%;
  height: 670px;
  background-image: url("../assets/images/barlogo.png");
  background-position: center;
  overflow-x: hidden;
  overflow-y: auto;
}

.beer-rating-list {
  margin-top: 1%;
  height: 670px;
  background-image: url("../assets/images/boozebuddieslogo.png");
  background-position: center;
  overflow-x: hidden;
  overflow-y: auto;
}

.bar-rating-list::-webkit-scrollbar { /* WebKit */
    width: 0;
    height: 0;
}

.beer-rating-list::-webkit-scrollbar { /* WebKit */
    width: 0;
    height: 0;
}
</style>