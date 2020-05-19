<template>
<div id="app">
  <div id="nav">
    <Navigation />
  </div>
  <router-view />
  </div>
</template>

<script>
import './assets/css/main.css';
export default {
  name: "App",

  components: {
    
  },

  data: () => ({
    //
  })
};
</script>
<style>
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
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>