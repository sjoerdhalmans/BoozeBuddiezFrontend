<template>
  
</template>

<script>
import StarRating from "vue-star-rating";
import axios from "axios";
export default {
    data: () => ({
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
    mounted() {
    this.loadBars();
    },
    methods: {
    loadBars() {
      this.Bars = this.$store.getters.getBarCollection;
      this.filterRatedOut()
    },
         filterRatedOut(){
           console.log(this.$store.getters.getratingcollection.barRatings)
        var editArray = [...this.$store.getters.getBarCollection]
        this.$store.getters.getBarCollection.forEach(bar => {
          this.$store.getters.getratingcollection.barRatings.forEach(rating =>{
            console.log(bar)
            console.log(rating)
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
          }
        });
    }
  }
}
</script>