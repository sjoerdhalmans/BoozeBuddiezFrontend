<template>
    <div>
    <div class="row">
        <div class="col-12">Add New Bar</div>
    </div>
    <div v-if="addBar !== null">
               <v-form class="form_class"
    ref="form"
    lazy-validation
  >
    <v-text-field
      label="Bar name"
      v-model="bar.name"
      required
    ></v-text-field>
    <v-text-field
      label="Address"
      v-model="bar.address"
      required
    ></v-text-field>
    <v-text-field
      label="Zipcode"
      v-model="bar.zipcode"
      required
    ></v-text-field>
    <v-text-field
      label="Telephone number"
      v-model="bar.telephoneNumber"
    ></v-text-field>

    <v-btn id="search" @click="addNewBarToDB"
    >
    </v-btn>
  </v-form>
    </div>
    <div class="row">
        <div class="col-12" @click="Reset"> RETURN </div>
    </div>

</div>
</template>

<script>
import axios from 'axios'
export default {

    data(){
        return{
            bar:{
                name: null,
                address: null,
                zipcode: null,
                telephoneNumber: null,
                location: null
            }
        }
    },
    computed:{
        addBar(){
        this.setdata()
        return this.$store.getters.getNewBar;
        }
    },
    methods:{
        Reset(){
            this.$store.dispatch("SaveNewBar", null)
            this.$store.dispatch("SaveSearchResult", null)
        },
        addNewBarToDB(){

            axios.post("http://217.101.44.31:8084/api/public/bar/addBar", {
            name: this.bar.name,
            adress: this.bar.address,
            telephoneNumber: this.bar.telephoneNumber,
            zipcode: this.bar.zipcode,
            longitude: this.bar.location.lat,
            latitude: this.bar.location.lng

            }).then(respone => {
                if(respone.status == 200){
                this.$store.dispatch('SaveNewBar', null)
                this.$store.dispatch("SaveSearchResult", null)
                }
               // location.reload()
            })
        },
        setdata(){
            try {
            this.bar.name = this.$store.getters.getNewBar[0].street
            this.bar.address = this.$store.getters.getNewBar[0].street
            this.bar.zipcode = this.$store.getters.getNewBar[0].postalCode
            this.bar.location = this.$store.getters.getNewBar[0].latLng
            } catch (error) {
                console.log(error)
            }

        }
    }
}
</script>

<style>

</style>