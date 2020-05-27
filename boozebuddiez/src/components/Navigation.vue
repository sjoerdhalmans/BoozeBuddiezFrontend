<template>
  <div>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link v-if="$auth.isAuthenticated" to="/profile">Profile</router-link>
    <router-link v-if="$auth.isAuthenticated" to="/map">Map</router-link>
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
