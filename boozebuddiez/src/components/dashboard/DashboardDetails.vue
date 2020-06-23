<template>
  <div data-app>
    <v-row>
     <v-col cols="12" sm="6">
        <v-autocomplete
            :items="this.barnames"
            label="Select a bar to edit"
            v-model="barname"
        ></v-autocomplete>
     </v-col>
    </v-row>
      <v-row>
        <v-col cols="6" sm="6">
          <v-card v-if="this.barDetails !== null">
            <v-card-title>
              {{this.barDetails.name}}
            </v-card-title>
            <v-card-text>
              Location: {{this.barDetails.adress}}
            </v-card-text>
            <v-card-text>
              Zipcode: {{this.barDetails.zipcode}}
            </v-card-text>
            <v-card-text>
              Telephone Number: {{this.barDetails.telephoneNumber}}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
  </div>
</template>

<script>
export default {
    data(){
        return{
            barname: null,
            barnames: [],
            barDetails: null,
        }
    },
     watch: {
      barname () {
        this.loadBarDetails()
      },
     },
computed:{
    getBeers(){
        return this.$store.getters.getBeerCollection
    },
    getBars(){
        return this.$store.getters.getBarCollection
    }
}, 
mounted(){
      this.loadbars();

    },
    methods:{
      loadbars(){
        this.$store.getters.getBarCollection.filter(bar => this.barnames.push(bar.name));
      },
      loadBarDetails(){
          this.barDetails = this.$store.getters.getBarCollection.filter(bar => this.barname === bar.name)[0]
          this.$store.dispatch("SaveBar",this.barDetails)
      }
}
}
</script>

<style>

</style>