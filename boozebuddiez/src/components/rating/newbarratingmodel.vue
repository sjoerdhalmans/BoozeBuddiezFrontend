<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color=#795548 v-bind="attrs" v-on="on">Add</v-btn>
      </template>
      <v-card class = "modelbackground">
        <v-card-title>
          <span class="headline">New Bar Rating</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6">
                <v-autocomplete :items="this.barnames" label="Bars" v-model="rating.name"></v-autocomplete>
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
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="save">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import StarRating from 'vue-star-rating'
import axios from 'axios'
export default {
  data: () => ({
    dialog: false,
        Bars: null,
    barnames: [],
    rating: {
      rating: null,
      name: null,
      id: null
    }
  }),
  components: {
    StarRating,
  },
  computed:{

  },
  mounted() {
    this.loadBars();
          this.filterRatedOut();
    },
    methods: {
    loadBars() {
      this.Bars = this.$store.getters.getBarCollection;

    },
         filterRatedOut(){
           console.log(this.$store.getters.getratingcollection.barRatings)
        var editArray = [...this.$store.getters.getBarCollection]
        this.$store.getters.getBarCollection.forEach(bar => {
          this.$store.getters.getratingcollection.barRatings.forEach(rating =>{
            if(bar.id === rating.barId)
            {
              console.log("delete")
              var index = editArray.indexOf(bar)
              editArray.splice(index, 1)
            }
          })
        });
        editArray.filter(bar => this.barnames.push(bar.name))
      },
    save() {
      this.dialog = false;
      this.rating.id = this.Bars.filter(bar => bar.name == this.rating.name);
      this.rating.id = this.rating.id[0].id;
      this.sendtodb();
    },
    sendtodb() {
      axios.post("http://217.101.44.31:8086/api/public/bar/rateBar", {
        
          objectId: this.rating.id,
          objectRating: this.rating.rating,
          userId: this.$store.getters.getUser.id
        })
          .then(respone => {
          if (respone.status == 200) {
            var bar = {
              userId: this.$store.getters.getUser.id,
              barId: this.rating.id,
              rating: this.rating.rating
            };
            var ratings = this.$store.getters.getratingcollection;
            ratings.barRatings.push(bar);
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
  }
};
</script>

<style>
.modelbackground{
    background: blanchedalmond !important;
}
</style>