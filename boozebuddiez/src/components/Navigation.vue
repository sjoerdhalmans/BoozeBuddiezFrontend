<template>
  <div class="toolbar">
    <img alt="booze logo" class = "logo routerlink" src="../assets/images/boozebuddieslogo.png" />
    <router-link class = "routerlink" to="/">Home </router-link>
    <router-link class = "routerlink" to="/about">About </router-link>
    <router-link class = "routerlink" v-if="$auth.isAuthenticated" to="/profile">Profile </router-link>
    <router-link class = "routerlink" v-if="$auth.isAuthenticated" to="/map">Map </router-link>
    <router-link class = "routerlink" v-if="$auth.isAuthenticated" to="/rating">Rating </router-link>
    <button class = "routerlink" v-if="$auth.isAuthenticated" v-on:click="this.$auth.logout">Logout</button>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  props: {
    msg: String
  }
};
</script>

<style>
.toolbar {
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  align-items: center;
  background-color: blanchedalmond;
  color: lightgray;
  font-weight: 600;
}
.toolbar img {
  margin: 0 16px;
}
.toolbar #twitter-logo {
  height: 40px;
  margin: 0 16px;
}
.toolbar #twitter-logo:hover {
  opacity: 0.8;
}
.routerlink{
  position: relative;
  top: 50%;
}
.logo{
    border-style: none;
    height: 100%;
    width: auto;
}
</style>
