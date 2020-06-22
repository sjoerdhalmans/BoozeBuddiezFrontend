<template>
  <div>
    <div id="nav">
      <Navigation />
    </div>
    <div>
      <img :src="$auth.user.picture" />
      <h2>{{ $auth.user.name }}</h2>
      <p>{{ $auth.user.email }}</p>
    </div>

    <div>
      <pre>{{ JSON.stringify($auth.user, null, 2) }}</pre>
    </div>
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
