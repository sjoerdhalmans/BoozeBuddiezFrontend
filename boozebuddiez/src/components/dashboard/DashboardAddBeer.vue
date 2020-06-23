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
          <v-form v-if="this.editBeerDetails !== null">
              <v-card>
            <v-card-title>
              {{this.editBeerDetails.beer.name}}
            </v-card-title>
            <v-card-text>
                <v-container>
                <v-row>
                        <v-col cols="22" sm="12">
                            <v-text-field label="Brand" disabled v-model='this.editBeerDetails.beer.brand'></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                              <v-text-field label="ABV%" disabled v-model='this.editBeerDetails.beer.alcoholPercentage'></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                               <v-text-field label="Price" v-model='newEditPrice' :placeholder="this.editBeerDetails.price.toString()"></v-text-field>
                        </v-col>                     
                    </v-row>
                </v-container>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="editBarBeers">Edit</v-btn>
                    </v-card-actions>
            </v-card-text>
              </v-card>
          </v-form>
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
        <v-col cols="12" sm="6">
        <v-form v-if="this.newBeerDetails !== null">
              <v-card>
            <v-card-title>
              {{this.newBeerDetails.name}}
            </v-card-title>
            <v-card-text>
                <v-container>
                <v-row>
                        <v-col cols="22" sm="12">
                            <v-text-field label="Brand" disabled v-model='this.newBeerDetails.brand'></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                              <v-text-field label="ABV%" disabled v-model='this.newBeerDetails.alcoholPercentage'></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                               <v-text-field label="Price" v-model='newBeerPrice'></v-text-field>
                        </v-col>                     
                    </v-row>
                </v-container>
                   <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="AddBarBeers">Add</v-btn>
                    </v-card-actions>
            </v-card-text>
              </v-card>
          </v-form>
        </v-col>
      </v-row>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            EditOwnedBeer: null,
            AddNewBeer: null,
            ownBeers: [],
            notOwnBeers: [],
            editBeerDetails: null,
            newBeerDetails: null,
            newBeerPrice: null,
            newEditPrice: null
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
        this.filterhetleven(this.$store.getters.getDashboardBar.beers)
        return this.$store.getters.getDashboardBar.beers.filter(beer => this.ownBeers.push(beer.beer.name+" | "+beer.beer.brand))
    },
},
methods:{
    filterhetleven(beerInBar){
     this.ownBeers = []
    //     this.notOwnBeers = [...this.$store.getters.getBeerCollection]
    //     //var newArray = this.notOwnBeers
    //     for (let index = 0; index < this.notOwnBeers.length; index++) {
    //         const element = this.notOwnBeers[index];
    //         console.log(this.notOwnBeers.length)
            
            
    //         beerInBar.forEach(e => {
    //          if(element.id === e.beer.id){
    //            //  console.log("removed "+ element.name + " And "+ e.beer.name )
    //            var a = this.notOwnBeers.indexOf(element)
    //             this.notOwnBeers.splice(a, 1)
    //             return 
    //         }
    //         });            
    //     }
    //     console.log(this.notOwnBeers)
    //     var newnewArray = []
    //     //haal namen op
    //    this.notOwnBeers.filter(beer => newnewArray.push(beer.name))
    //     //zet in display
    //    this.notOwnBeers = newnewArray
    var arrayList = [...this.$store.getters.getBeerCollection]
    var deleteArray = [...this.$store.getters.getBeerCollection]
    for (let index = 0; index < arrayList.length; index++) {
        const element = arrayList[index];
        console.log(arrayList.length)
        beerInBar.forEach(beerInTheBar => {
            console.log(beerInTheBar)
            if(element.id === beerInTheBar.beer.id){
                var indexToDelete = deleteArray.indexOf(arrayList[index])
                console.log("length: "+deleteArray.length)
                console.log("index to delete: "+indexToDelete)
               return deleteArray.splice(indexToDelete, 1)

            } 
        });
        }
                deleteArray.filter(beers => this.notOwnBeers.push(beers.name+" | "+beers.brand))
                console.log(this.notOwnBeers)

        beerInBar.forEach(beerInTheBar => {
            for (let index = 0; index < arrayList.length; index++) {
                const element = arrayList[index];
                if(element.id === beerInTheBar.beer.id){
                var indexToDelete = deleteArray.indexOf(arrayList[index])
                console.log("length: "+deleteArray.length)
                console.log("index to delete: "+indexToDelete)
               return deleteArray.splice(indexToDelete, 1)

            } 
            }
        })




            
    },
    LoadBeerAddDetails(){
        try {
                    this.newBeerDetails = this.$store.getters.getBeerCollection.filter(beer => this.AddNewBeer === beer.name+" | "+beer.brand)[0]
                console.log(this.newBeerDetails)
        this.$store.dispatch("SaveAddBeer",this.newBeerDetails)
        } catch (error) {
            console.log(error)
        }
    },
    LoadBeerEditDetails(){
        try {             
        this.editBeerDetails = this.$store.getters.getDashboardBar.beers.filter(beer => this.EditOwnedBeer === beer.beer.name+" | "+beer.beer.brand)[0]
        this.$store.dispatch("SaveEditBeer",this.editBeerDetails)
        } catch (error) {
            console.log(error)
        }


    },
    editBarBeers(){
        var beersWithOutEdit = this.$store.getters.getDashboardBar.beers.filter(beer => beer.beer.id !== this.editBeerDetails.beer.id)
        this.editBeerDetails.price = this.newEditPrice
        beersWithOutEdit.push(this.editBeerDetails)
        axios
        .put("http://217.101.44.31:8084/api/public/bar/editBar",{
            adress: this.$store.getters.getDashboardBar.adress,
            beers: beersWithOutEdit,
            id: this.$store.getters.getDashboardBar.id,
            latitude: this.$store.getters.getDashboardBar.latitude,
            longitude: this.$store.getters.getDashboardBar.longitude,
            name: this.$store.getters.getDashboardBar.name,
            telephoneNumber: this.$store.getters.getDashboardBar.telephoneNumber,
            zipcode: this.$store.getters.getDashboardBar.zipcode
        }).then(response =>{
            if(response.status === 200){
                  this.$toasted.show("You've succesfully edited this beer of this bar!", {
                    type: "success",
                    theme: "toasted-primary",
                    position: "bottom-right",
                    duration: 2500,
                });
                this.loadAllBars()
            }
        })
        this.reset()

        
    },
    AddBarBeers(){
        axios
        .post("http://217.101.44.31:8084/api/public/bar/addBeerToBar",{
            barId: this.$store.getters.getDashboardBar.id,
            beerId: this.newBeerDetails.id,
            price: this.newBeerPrice
        }).then(response =>{
            if(response.status === 200){
                  this.$toasted.show("You've succesfully added beer to this bar!", {
                    type: "success",
                    theme: "toasted-primary",
                    position: "bottom-right",
                    duration: 2500,
                });
                this.loadAllBars()
            }
        })
        this.reset()

    },
    loadAllBars(){
        axios
      .get('http://217.101.44.31:8084/api/public/bar/getAllBars')
      .then(data => (
        this.$store.dispatch("SaveBarCollection", data.data.bars)
        ))
    },
    reset(){
            this.EditOwnedBeer = null,
            this.AddNewBeer = null,
            this.ownBeers = [],
            this.notOwnBeers = [],
            this.editBeerDetails = null,
            this.newBeerDetails = null,
            this.newBeerPrice = null,
            this.newEditPrice = null
    }
}

}
</script>

<style>

</style>