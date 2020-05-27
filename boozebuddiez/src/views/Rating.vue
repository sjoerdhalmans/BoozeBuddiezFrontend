<template>
  <div>
    <div id="nav">
      <Navigation />
    </div>
    <div>Bar Rating</div>
    <div>Beer Rating</div>
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