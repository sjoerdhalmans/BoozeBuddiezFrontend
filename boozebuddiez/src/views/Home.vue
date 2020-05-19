<template>
  <div class="home">
    <h1>Boozebuddies</h1>
    <h2>The way to remember yesterday</h2>
    <img alt="booze logo" src="../assets/images/homelogo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />

    <!-- Check that the SDK client is not currently loading before accessing is methods -->
    <div v-if="!$auth.loading">
      <!-- show login when not authenticated -->
      <img class="loginbutton" src="../assets/images/googlelogin.png" @click="login">
      <!-- show logout when authenticated -->
      <button v-if="$auth.isAuthenticated" @click="logout">Log out</button>
    </div>
  </div>
</template>

<script>
// .. imports removed for brevity

export default {
  name: "home",
  components: {
    
  },
  methods: {
    // Log the user in
    login() {
      this.$auth.loginWithRedirect();
    },
    // Log the user out
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin
      });
    }
  }
};
</script>

<style>
  .loginbutton {
      width: 17%;
  }
</style>