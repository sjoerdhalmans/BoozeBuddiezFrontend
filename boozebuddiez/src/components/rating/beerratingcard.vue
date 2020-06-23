<template>
    <div class="row" v-if="fullBeer !== null || undefined ">
        <div class="col-5"> {{this.fullBeer[0].name}}</div>
                <star-rating class="col-2"
                    @rating-selected="this.editBeer"
                    v-bind:increment="0.5"
                    v-bind:max-rating="5"
                    inactive-color="#000"
                    active-color="#cc1166"
                    v-bind:star-size="20"
                    v-model="modelData"
                    >
                </star-rating >
    </div>
    
</template>

<script>

import StarRating from 'vue-star-rating'
import axios from 'axios'
export default {
        data(){
        return{
            fullBeer: null,
            modelDate: 0,
        }
    },
    mounted(){
        this.getBeerData()
    },
    methods:{
        getBeerData(){
           this.fullBeer = this.$store.getters.getBeerCollection.filter(beer => beer.id == this.rating.beerId)
            this.modelData = this.rating.rating
        },
     editBeer(){
        axios.put("http://217.101.44.31:8086/api/public/bar/EditBeerRating", {
            rating: this.modelData,
            beerId: this.fullBeer[0].id,
            userId: this.$store.getters.getUser.id,
            id: this.rating.id

            }).then(respone => {
                if (respone.status == 200) {
            var beer = {
              userId: this.$store.getters.getUser.id,
              beerId: this.fullBeer[0].id,
              rating: this.modelData,
              id: this.rating.id
            };
            var ratings = this.$store.getters.getratingcollection;
            var deleteBeer = ratings.beerRatings.filter(filterId => filterId.id != beer.id)
            deleteBeer.push(beer)

            ratings.beerRatings = deleteBeer

            this.$store.dispatch("SaveRatingCollection", ratings);

                this.$toasted.show("Beer rating changed succesfully!", {
                    type: "success",
                    theme: "toasted-primary",
                    position: "bottom-right",
                    duration: 2500,
                });
            }
          });
        },
    },
       components: {
    StarRating
  },
    props: ['rating'],
}
</script>