<template>
  <div>
    <div id="nav">
      <Navigation />
    </div>
    <v-row>
        <h1>Bar Dashboard</h1>
    </v-row>
    <v-row>
        <v-col>
        <DashboardDetails></DashboardDetails>
        </v-col>
        <v-col>
        <DashboardAddBeer></DashboardAddBeer>
        </v-col>
    </v-row>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import DashboardAddBeer from "@/components/dashboard/DashboardAddBeer.vue";
import DashboardDetails from "@/components/dashboard/DashboardDetails.vue";
export default {
components:{
    Navigation,
    DashboardAddBeer,
    DashboardDetails
},
}
</script>

<style>

</style>