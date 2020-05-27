<template>
  <div>
    <div id="nav">
      <Navigation />
    </div>
    <div class="row">
      <div class="col-1"></div>
      <div class="col-4 content">
        <div class="row">
          <h3 class="col-6">My bar ratings</h3>
          <h3 class="col-6 addbutton" v-on:click="null">Add new rating</h3>
        </div>
        <div class="itemlist"></div>
      </div>
      <div class="col-2"></div>
      <div class="col-4 content">
        <div class="row">
          <h3 class="col-6">My beer ratings</h3>
          <h3 class="col-6 addbutton" v-on:click="null">Add new rating</h3>
        </div>
        <div class="itemlist"></div>
      </div>
      <div class="col-1"></div>
    </div>
  </div>
</template>

<script>
import "../assets/css/main.css";
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

<style>
.content {
  margin-top: 2%;
  word-wrap: break-word;
}

* {
  color: grey;
}

.addbutton {
  text-decoration: underline;
  cursor: pointer;
}

.itemlist {
  margin-top: 1%;
  height: 700px;
  border-color: black;
  border-style: solid;
  border-width: 1px;
}
</style>