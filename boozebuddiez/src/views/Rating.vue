<template>
  <div>
    <div id="nav">
      <Navigation />
    </div>

    <v-container>
      <v-row>

        <v-col cols="12" sm="3" md="6" style="height: auto;">
          <v-row >
            <h3 class="col-md-6 col-sm-3" style="text-align: left">My bar ratings</h3>
            <div data-app class="col-md-6 col-sm-3 addbutton">
              <newbarratingmodel></newbarratingmodel>
            </div>
          </v-row>
          <div class="bar-rating-list">
            <div v-for="barrating in this.barrating.barRatings" :key="barrating.id">
              <barratingcard v-bind:rating="barrating" />
            </div>
          </div>
          
        </v-col>
        

        <v-col cols="12" sm="3" md="6" style="height: auto;">
          <div class="row">
            <h3 class="col-md-6 col-sm-3" style="text-align: left">My beer ratings</h3>
            <div data-app class="col-md-6 col-sm-3 addbutton">
              <addnewbeerrating></addnewbeerrating>
            </div>
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
import Axios from 'axios';
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

  mounted() {
    Axios
                .get('http://217.101.44.31:8086/api/public/bar/getAllUserRatings/' + this.$store.getters.getUser.id)
                .then(res => {
                    this.$store.dispatch("SaveRatingCollection", res.data)
                })
  }
};
</script>

<style>
@media (min-width: 800px) {
  .content {
  margin-top: 2%;
  word-wrap: break-word;
  height: 600px;
}

.addbutton {
  text-decoration: underline;
  cursor: pointer;
}

.bar-rating-list {
  margin-top: 1%;
  height: 670px;
  overflow-x: hidden;
  overflow-y: auto;
}

.beer-rating-list {
  margin-top: 1%;
  min-height: 670px;
  overflow-x: hidden;
  overflow-y: auto;
}

.beer-rating-list::before {
  content: "";
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background-image: url("../assets/images/boozebuddieslogo.png");
  background-size: cover;
  background-position: top center;
  height: 170px;
  width: 260px;
  opacity: 0.25;
  margin-top: 45%;
  margin-left: 30%;
}

.bar-rating-list::before {
  content: "";
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background-image: url("../assets/images/barlogo.png");
  background-size: cover;
  background-position: center;
  max-height: 300px;
  max-width: 300px;
  opacity: 0.25;
  margin-top: 35%;
}

.bar-rating-list::-webkit-scrollbar {
  /* WebKit */
  width: 0;
  height: 0;
}

.beer-rating-list::-webkit-scrollbar {
  /* WebKit */
  width: 0;
  height: 0;
}
}
@media (max-width: 800px) {
  /* CSS that should be displayed if width is equal to or less than 800px goes here */
}
</style>