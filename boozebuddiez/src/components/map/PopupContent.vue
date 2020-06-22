<template>
  <div class="content row" v-if="this.popupState == 0">
    <div class="col-6">
       <div class="row">
         <div  class="col-6" 
          >Bar Details</div >
           <div  class="col-6" 
           v-on:click="changeContent(1)"
          >Edit bar details</div >
       </div> 
      <div class="bardetails">
         <div>Name: {{this.loadBar[0].name}}</div>
         <div >Adress: {{this.loadBar[0].adress}}  </div>
         <div >Zipcode: {{this.loadBar[0].zipcode}}</div>
         <div>Telephone number: {{this.loadBar[0].telephoneNumber}}</div>
      </div>
       <div class="row">
         <div class="col-6">Bar Rating</div>
       </div>
         <div class="bar rating">
            <div>This bar has an average rating of: {{this.detailedBar.average}}, out of {{this.detailedBar.numberOfRatings}} rating(s).</div>
         <div v-if="this.starData === 0">
            <div>Rate this bar.</div>
                    <StarRating
            v-bind:increment="0.5"
            v-bind:max-rating="5"
            inactive-color="#000"
            active-color="#cc1166"
            :star-size="20"
            v-model="starData"
            @rating-selected="this.addBarRating"
        ></StarRating>
         </div>
          <div v-else>
            <div>Edit your bar rating.</div>
                    <StarRating
            v-bind:increment="0.5"
            v-bind:max-rating="5"
            inactive-color="#000"
            active-color="#cc1166"
            :star-size="20"
            v-model="starData"
            @rating-selected="this.editBarRating"
        ></StarRating>
         </div>
      </div>
    </div>
    <div class="col-6">
      <div class="row">
         <div class="col-6">Beer menu</div>
         <div class="col-6"
         v-on:click="changeContent(2)">Add beer</div>
      </div>
      <div v-for="beer in this.loadBar[0].beers" :key="beer.beer.id">
        <BeerMenuItem v-bind:beer="beer"></BeerMenuItem>
         </div>
       </div>
      <div>
    </div>
  </div>
  <div v-else-if="this.popupState == 1">
    <EditBarForm v-bind:bar="this.loadBar[0]"></EditBarForm>
  </div>
  <div v-else-if="this.popupState == 2">
    <AddBeerToBarForm v-bind:bar="this.loadBar[0]"></AddBeerToBarForm>
  </div>
   <div v-else-if="this.popupState == 3">
    Edit beer prices
    <EditBeerPriceForm></EditBeerPriceForm>
  </div>
</template>
 
<script>
import Vue from 'vue'
import store from '../../store'
import axios from 'axios'
import StarRating from "vue-star-rating";
import BeerMenuItem from './BeerMenuItem'
import EditBarForm from './editBarForm'
import AddBeerToBarForm from './AddBeerToBarForm'
import EditBeerPriceForm from './EditBeerPriceForm'
export default Vue.extend({
    computed:{
      popupState(){
        return store.getters.getPopupState 
      },
      loadBar(){
        return store.getters.getBarCollection.filter(bar => bar.name == this.feature.properties.title )
      },
      detailedBar(){
        return store.getters.getDetailedBarRating
      },
    },
    data(){
      return{
        starData: 0,
        rating: null
      }
    },
    components:{
    StarRating,
    BeerMenuItem,
    EditBarForm,
    AddBeerToBarForm,
    EditBeerPriceForm
    },
  props: {
    feature: {
      required: true,
      type: Object,
    },
  },
  mounted(){
    this.loadBarRating(),
    this.loadRating()
  },
  methods:{
    changeContent(index){
      store.dispatch("SavePopupState", index)
    },
    loadBarRating(){
      axios
      .get('http://217.101.44.31:8086/api/public/bar/getBarAverage/' + this.loadBar[0].id)
      .then(res => {
        store.dispatch("SaveDetailedBarRating", res.data)
      })
    },
    loadRating(){
       var ratings = store.getters.getratingcollection.barRatings.filter(rating => this.loadBar[0].id == rating.barId)
       console.table()
       if(ratings.length < 1){
         console.log(ratings)
         return this.starData = 0
       }
       this.rating = ratings[0]
       return this.starData = ratings[0].rating
    },
      editBarRating(){
        axios.put("http://217.101.44.31:8086/api/public/bar/EditBarRating", {
            rating: this.starData,
            barId: this.rating.barId,
            userId: store.getters.getUser.id,
            id: this.rating.id

            }).then(respone => {
                if (respone.status == 200) {
            var bar = {
              userId: store.getters.getUser.id,
              barId: this.rating.barId,
              rating: this.starData,
              id: this.rating.id
            };
            var ratings = store.getters.getratingcollection;

            var deleteBar = ratings.barRatings.filter(filterId => filterId.id != bar.id)
            deleteBar.push(bar)

            ratings.barRatings = deleteBar
            store.dispatch("SaveRatingCollection", ratings);

                this.$toasted.show("Bar rating changed succesfully!", {
                    type: "success",
                    theme: "toasted-primary",
                    position: "bottom-right",
                    duration: 2500,
                });
                this.loadBarRating()
            }
          });
        },
    addBarRating(){
            axios.post("http://217.101.44.31:8086/api/public/bar/rateBar", {
        
          objectId: this.loadBar[0].id,
          objectRating: this.starData,
          userId: store.getters.getUser.id
        })
          .then(respone => {
            console.log(respone)
          this.loadAllMyRatings()
        });
    },
    loadAllMyRatings(){
      axios.get('http://217.101.44.31:8086/api/public/bar/getAllUserRatings/' + store.getters.getUser.id)
      .then(response => (
      console.table(response.data),
      store.dispatch('SaveRatingCollection', response.data),
       this.$toasted.show("Bar rating added succesfully!", {
                    type: "success",
                    theme: "toasted-primary",
                    position: "bottom-right",
                    duration: 2500,
                }),
        this.loadBarRating(),
      this.loadRating()
    ))}
  }
})
</script>

<style >
  .content{
    width: 40vw;
    height: 40vh;
  }
    .bardetails{
    margin: 10px 0px;
  }
  .mapboxgl-popup-content{
    width: 40vw !important;
    height: 40vh !important;
    background: blanchedalmond !important;
  }
</style>