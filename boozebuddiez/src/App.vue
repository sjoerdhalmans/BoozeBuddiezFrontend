<template>
<div id="app">
  <router-view />
  </div>
</template>

<script>
import './assets/css/main.css';
import axios from 'axios';
export default {
  name: "App",
  components: {
    
  },
  mounted () {
    axios
      .get('http://217.101.44.31:8084/api/public/bar/getAllBars')
      .then(data => (
        this.$store.dispatch("SaveBarCollection", data.data.bars)
        ))

            axios
      .get('http://217.101.44.31:8083/api/public/beer/getAllBeers')
      .then(data => (console.table(data.data.beers),
        this.$store.dispatch("SaveBeerCollection", data.data.beers),
        console.table(this.$store.getters.getBeerCollection)
        ))
  },
  data: () => ({
    //
  })



};
</script>
<style>
@import 'https://api.mapbox.com/mapbox-gl-js/v1.8.1/mapbox-gl.css';

h1 {
  font-size: 72px;
  color: black;
}

h2 {
  font-size: 40px;
  color: #3E3C3B;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: blanchedalmond;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>