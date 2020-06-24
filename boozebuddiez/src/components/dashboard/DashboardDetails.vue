<template>
  <div data-app>
    <v-row sm="12" align="center" justify="center" >
      <v-col cols="12" sm="12" md="5">
        <v-autocomplete
          style="margin-top: 0px; !important; padding-top: 0px; !important"
          :items="this.barnames"
          label="Select a bar to edit"
          v-model="barname"
        ></v-autocomplete>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="12" md="5" align="center" justify="center">
        <v-card v-if="this.barDetails !== null" style="text-align: left;">
          <v-card-title>{{this.barDetails.name}}</v-card-title>
          <v-card-text>Location: {{this.barDetails.adress}}</v-card-text>
          <v-card-text>Zipcode: {{this.barDetails.zipcode}}</v-card-text>
          <v-card-text>Telephone Number: {{this.barDetails.telephoneNumber}}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      barname: null,
      barnames: [],
      barDetails: null
    };
  },
  watch: {
    barname() {
      this.loadBarDetails();
    }
  },
  computed: {
    getBeers() {
      return this.$store.getters.getBeerCollection;
    },
    getBars() {
      return this.$store.getters.getBarCollection;
    }
  },
  mounted() {
    this.loadbars();
  },
  methods: {
    loadbars() {
      this.$store.getters.getBarCollection.filter(bar =>
        this.barnames.push(bar.name)
      );
    },
    loadBarDetails() {
      this.barDetails = this.$store.getters.getBarCollection.filter(
        bar => this.barname === bar.name
      )[0];
      this.$store.dispatch("SaveBar", this.barDetails);
    }
  }
};
</script>

<style>

</style>