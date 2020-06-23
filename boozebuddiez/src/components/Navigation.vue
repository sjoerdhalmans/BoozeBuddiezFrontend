<template>
<div>
  <b-navbar toggleable="lg" variant="info" style="background-color: blanchedalmond!important;">
    <img alt="booze logo" class="logo" src="../assets/images/boozebuddieslogo.png" />
    <b-navbar-brand href="map">BoozeBuddies</b-navbar-brand>
    
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item v-if="$auth.isAuthenticated" href="Map">Map</b-nav-item>
          <b-nav-item v-if="$auth.isAuthenticated" href="Dashboard">Dashboard</b-nav-item>
          <b-nav-item v-if="$auth.isAuthenticated" href="Rating">Rating</b-nav-item>
          <!-- <b-nav-item href="Logout">Logout</b-nav-item> -->
          <b-nav-item v-if="$auth.isAuthenticated" v-on:click="this.$auth.logout">Logout</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
  </b-navbar>
<br>
</div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
  name: "Navigation",
  props: {
    msg: String
  }
};
</script>

<style>

@media (min-width:700px) {
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
}
@media (max-width:700px) {
   .logo {
  border-style: none;
  height: auto;
  max-height: 85px;
  width: 20%;
  float: left;
  }
  .logotext {
  float: left;
  width: 60%;
  border-bottom: 2px solid currentColor;
  color: grey;
  font-size: 26px;
  }
  .routerlink {
  visibility: hidden;
  }
}
</style>
