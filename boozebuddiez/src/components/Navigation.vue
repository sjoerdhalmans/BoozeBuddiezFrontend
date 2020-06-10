<template>
  <div class="toolbar">
    <img alt="booze logo" class="logo" src="../assets/images/boozebuddieslogo.png" />
    <h2 class="logotext" v-if="$auth.isAuthenticated" to="/map">BoozeBuddies</h2>
    <button class="routerlink logoutbutton" v-if="$auth.isAuthenticated" v-on:click="this.$auth.logout">Logout</button>
    <router-link class="routerlink" v-if="$auth.isAuthenticated" to="/rating">Rating</router-link>
    <router-link class="routerlink" v-if="$auth.isAuthenticated" to="/map">Map</router-link>
    <!-- <router-link class="routerlink" v-if="$auth.isAuthenticated" to="/profile">Profile</router-link>
    <router-link class="routerlink" v-if="$auth.isAuthenticated" to="/about">About</router-link> -->
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    <!-- <router-link class="routerlink" to="/">Home</router-link> -->
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
  height: auto;
  align-items: center;
  background-color: blanchedalmond;
  color: grey;
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
.routerlink {
  position: relative;
  top: 40%;
  margin-right: 10px;
  font-size: 20px;
  float: right;
}
.logo {
  border-style: none;
  height: 80px;
  width: auto;
  float: left;
}
.logotext {
  float: left;
  border-bottom: 2px solid currentColor;
  color: grey;
}
.logoutbutton {
  text-decoration: underline;
}
</style>
