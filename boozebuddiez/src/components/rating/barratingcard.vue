<template>
    <div class="row" v-if="fullBar !== null || undefined ">
        <div class="col-5" style="text-align: left;">  {{this.fullBar[0].name}}</div>
        <star-rating class="col-2"
          @rating-selected="this.editBar"
            v-bind:increment="0.5"
            v-bind:max-rating="5"
            inactive-color="#000"
            active-color="#cc1166"
            v-bind:star-size="20"
            v-model="modelData"
            >
        </star-rating>
    </div>
    
</template>

<script>
import StarRating from 'vue-star-rating'
import axios from 'axios'
export default {
    data(){
        return{
            fullBar: null,
            modelData: 0,
        }
    },
    mounted(){
        this.getBarData()
    },
    methods:{
        getBarData(){
           this.fullBar = this.$store.getters.getBarCollection.filter(bar => bar.id == this.rating.barId)
           this.modelData = this.rating.rating
        },
         editBar(){
             axios.put("http://217.101.44.31:8086/api/public/bar/EditBarRating", {
            rating: this.modelData,
            barId: this.fullBar[0].id,
            userId: this.$store.getters.getUser.id,
            id: this.$store.getters.getratingcollection.barRatings.filter(rating => rating.barId === this.fullBar[0].id)[0].id
            }).then(respone => {
                if (respone.status == 200) {
            var rating = respone.data
            }
            var ratings = this.$store.getters.getratingcollection;

            var deleteBar = ratings.barRatings.filter(filterId => filterId.barId === rating.barId)
            var index = ratings.barRatings.indexOf(deleteBar)
            ratings.barRatings[index] = rating
            //console.log(deleteBar)
            //deleteBar.push(rating)

            //ratings.barRatings = deleteBar
            this.$store.dispatch("SaveRatingCollection", ratings);

                this.$toasted.show("Bar rating changed succesfully!", {
                    type: "success",
                    theme: "toasted-primary",
                    position: "bottom-right",
                    duration: 2500,
                });
          });
          this.loadnewratings()
        },
            loadnewratings(){
      axios.get('http://217.101.44.31:8086/api/public/bar/getAllUserRatings/' + this.$store.getters.getUser.id)
           .then(res => {
                this.$store.dispatch("SaveRatingCollection", res.data)
               console.log(res.data)
                })
      }
    },
       components: {
    StarRating
  },
    props: ['rating']
}
</script>