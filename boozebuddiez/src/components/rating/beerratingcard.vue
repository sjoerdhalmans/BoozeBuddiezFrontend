<template>
    <div class="row">
        <div class="col-5"> {{this.fullBeer[0].name}}</div>
        <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3"> </div>
                <star-rating class="col-2"
     v-bind:increment="0.5"
     v-bind:max-rating="5"
     inactive-color="#000"
     active-color="#cc1166"
     v-bind:star-size="20"
     v-bind:rating="rating.rating"
    >
</star-rating >
    </div>
    
</template>

<script>

import StarRating from 'vue-star-rating'
export default {
        data(){
        return{
            fullBeer: null
        }
    },
    mounted(){
        this.getBeerData()
    },
    methods:{
        getBeerData(){
           this.fullBeer = this.$store.getters.getBeerCollection.filter(beer => beer.id == this.rating.beerId)
        },
    },
       components: {
    StarRating
  },
    props: ['rating'],
}
</script>