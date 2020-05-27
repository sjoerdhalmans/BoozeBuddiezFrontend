<template>
  <div class="about">
    <div id="nav">
      <Navigation />
    </div>
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import '../assets/css/main.css';
import Navigation from "@/components/Navigation.vue";
export default {
  name: "App",

  components: {
    Navigation
  },

  data: () => ({
    //
  })
};
</script>