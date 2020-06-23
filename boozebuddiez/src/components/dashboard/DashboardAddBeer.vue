<template>
  <div v-if="getBeers !== null" data=app>
         <v-row>
     <v-col cols="12" sm="6">
        <v-autocomplete
            :items="ownBeers"
            label="Select a beer to edit"
            v-model="EditOwnedBeer"
        ></v-autocomplete>
     </v-col>
    </v-row>
    <v-row>
        <v-col cols="6" sm="6">
          <v-card v-if="this.editBeerDetails !== null">
            <v-card-title>
              {{this.editBeerDetails.name}}
            </v-card-title>
            <v-card-text>
              Price: {{this.editBeerDetails.price}}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

     <v-row>
     <v-col cols="12" sm="6">
        <v-autocomplete
            :items="notOwnBeers"
            label="Add new beer to bar"
            v-model="AddNewBeer"
        ></v-autocomplete>
     </v-col>
    </v-row>
    <v-row>
        <v-col cols="6" sm="6">
          <v-card v-if="this.newBeerDetails !== null">
            <v-card-title>
              {{this.newBeerDetails.name}}
            </v-card-title>
            <v-card-text>
              Price: {{this.newBeerDetails.price}}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
    data(){
        return{
            EditOwnedBeer: null,
            AddNewBeer: null,
            ownBeers: [],
            notOwnBeers: null,
            editBeerDetails: null,
            newBeerDetails: null
        }
    },
    watch: {
      EditOwnedBeer () {
        this.LoadBeerEditDetails()
      },
      AddNewBeer () {
        this.LoadBeerAddDetails()
      },
    },
computed:{
    getBeers(){
        console.log(this.$store.getters.getBeerCollection)
                 this.filterhetleven(this.$store.getters.getDashboardBar.beers)
        return this.$store.getters.getDashboardBar.beers.filter(beer => this.ownBeers.push(beer.beer.name))
    },
},
methods:{
    filterhetleven(beerInBar){
        this.ownBeers = []
        let datavandieapi = [];
       Axios
      .get('http://217.101.44.31:8083/api/public/beer/getAllBeers')
      .then(data =>
        this.datavandieapi = data.data.beers
        )
    

        console.log(datavandieapi)
        var newArray = this.notOwnBeers
        for (let index = 0; index < this.notOwnBeers.length; index++) {
            const element = this.notOwnBeers[index];


            beerInBar.forEach(e => {
             if(element.id === e.beer.id){
                return newArray.splice(index, 1)
            }
            });
        console.log(newArray)
            
        }

        var newnewArray = []
        //haal namen op
       newArray.filter(beer => newnewArray.push(beer.name))
        //zet in display
       this.notOwnBeers = newnewArray
    },
    LoadBeerAddDetails(){
        this.newBeerDetails = this.$store.getters.getBeerCollection.filter(beer => this.AddNewBeer === beer.name)[0]
        this.$store.dispatch("SaveAddBeer",this.newBeerDetails)
    },
    LoadBeerEditDetails(){
        this.editBeerDetails = this.$store.getters.getBeerCollection.filter(beer => this.EditOwnedBeer === beer.name)[0]
        this.$store.dispatch("SaveEditBeer",this.editBeerDetails)
    }
}

}
</script>

<style>

</style>