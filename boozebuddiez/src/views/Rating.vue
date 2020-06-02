<template>
  <div>
    <div id="nav">
      <Navigation />
    </div>
    <div class="row">
      <div class="col-1"></div>
      <div class="col-4 content">
        <div class="row">
          <h3 class="col-6">My bar ratings</h3>
          <h3 class="col-6 addbutton" v-on:click="null">Add new rating</h3>
        </div>
        <div class="bar-rating-list"></div>
      </div>
      <div class="col-2"></div>
      <div class="col-4 content">
        <div class="row">
          <h3 class="col-6">My beer ratings</h3>
          <h3 class="col-6 addbutton" v-on:click="null">Add new rating</h3>
        </div>
        <div class="beer-rating-list"></div>
      </div>
      <div class="col-1"></div>
    </div>
  </div>
</template>

<script>
import "../assets/css/main.css";
import axios from 'axios';
import Navigation from "@/components/Navigation.vue";
export default {
  
  name: "App",
  
  components: {
    Navigation
  },

  data () {
    return {
      info: null
    }
  },
  mounted()
  {
    axios.get('http://217.101.44.31:8086/api/public/bar/getAllUserRatings/46')
    .then(response => (this.info = response.data));
    this.$store.dispatch('SaveRatingCollection', this.info);
  },
};
</script>

<style>
.content {
  margin-top: 2%;
  word-wrap: break-word;
}

* {
  color: grey;
}

.addbutton {
  text-decoration: underline;
  cursor: pointer;
}

.bar-rating-list {
  margin-top: 1%;
  height: 700px;
  border-color: black;
  border-style: solid;
  border-width: 1px;
  background-image: url('../assets/images/barlogo.png');
  opacity: 0.3;
  background-position: center;
}

.beer-rating-list {
  margin-top: 1%;
  height: 700px;
  border-color: black;
  border-style: solid;
  border-width: 1px;
  background-image: url('../assets/images/boozebuddieslogo.png');
  opacity: 0.3;
  background-position: center;
}
</style>