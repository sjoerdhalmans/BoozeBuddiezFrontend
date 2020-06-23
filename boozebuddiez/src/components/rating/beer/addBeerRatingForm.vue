<template>
    <div>
    <v-card-text>
        <v-container>
        <v-row>
            <v-col cols="12" sm="6">
            <v-autocomplete
                :items="this.beernames"
                label="Unrated Beers"
                v-model='rating.name'
            ></v-autocomplete>
            </v-col>
        </v-row>
        </v-container>
        <v-container>
        <StarRating
            v-bind:increment="0.5"
            v-bind:max-rating="5"
            inactive-color="#000"
            active-color="#cc1166"
            v-model="rating.rating"
        ></StarRating>
        </v-container>
        <small>*indicates required field</small>
    </v-card-text>
    <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="close">Close</v-btn>
        <v-btn color="blue darken-1" text @click="save">Save</v-btn>
    </v-card-actions>
    </div>
</template>

<script>
import axios from 'axios';
import StarRating from 'vue-star-rating'
export default {
    data:() =>({
      Beers: null,
      beernames:[],
      rating: {
        rating: null,
        name: null,
        id: null,
      },
    }),
    components:{
      StarRating,
    },
     mounted(){
      this.loadBeers();

    },
    methods:{
      loadBeers(){
        this.Beers = this.$store.getters.getBeerCollection;
        this.filterRatedOut()
      },
      filterRatedOut(){
        var editArray = [...this.$store.getters.getBeerCollection]
        this.$store.getters.getBeerCollection.forEach(beer => {
          this.$store.getters.getratingcollection.beerRatings.forEach(rating =>{
            if(beer.id === rating.beerId)
            {
              console.log("delete")
              var index = editArray.indexOf(beer)
              editArray.splice(index, 1)
            }
          })
        });
        editArray.filter(beer => this.beernames.push(beer.name+" | "+beer.brand))
      },
      save(){
        this.$store.dispatch("SaveModelState", false)
        this.rating.id = this.Beers.filter(beer => beer.name+" | "+beer.brand == this.rating.name)
        this.rating.id = this.rating.id[0].id
        this.sendtodb();

      },
       close(){
        this.$store.dispatch("SaveModelState", false)
      },
      sendtodb(){
        axios.post("http://217.101.44.31:8086/api/public/bar/rateBeer", {
            objectId: this.rating.id,
            objectRating: this.rating.rating,
            userId: this.$store.getters.getUser.id,

            }).then(respone => {
                if (respone.status == 200) {
            var beer = {
              userId: this.$store.getters.getUser.id,
              beerId: this.rating.id,
              rating: this.rating.rating
            };
            var ratings = this.$store.getters.getratingcollection;
            ratings.beerRatings.push(beer);
            this.$store.dispatch("SaveRatingCollection", ratings);
            this.filterRatedOut();
            this.loadnewratings()
            }
          });
      },
      loadnewratings(){
                        axios.get('http://217.101.44.31:8086/api/public/bar/getAllUserRatings/' + this.$store.getters.getUser.id)
                .then(res => {
                    this.$store.dispatch("SaveRatingCollection", res.data)
                })
      }
    },
}
</script>

<style>

</style>