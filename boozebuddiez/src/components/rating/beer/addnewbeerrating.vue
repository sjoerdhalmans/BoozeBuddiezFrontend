<template>
  <v-row justify="center">
    <v-dialog v-model="this.state" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color=#795548
          v-bind="attrs"
          v-on="on"
          v-on:click="open"
        >
          Add
        </v-btn>
      </template>
      <v-card class = "modelbackground">
        <v-card-title >
          <div class="row" v-if="this.selectedScreenData == 0">
            <span class="headline col 6">New Beer Rating</span>
             <button style="border: 1px solid black;" class="col 6" @click="selectedScreen(1)">Add a beer</button>
          </div>
          <div class="row" v-else >
            <span class="headline col 6" >Add a beer</span>
             <button style="border: 1px solid black;" class="col 6" @click="selectedScreen(0)">Add new rating</button>
          </div>
        </v-card-title>
        <div v-if="this.selectedScreenData == 0">
            <addBeerRatingForm/>
        </div>
         <div v-else>
           <addNewBeerForm/>
        </div>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import addBeerRatingForm from './addBeerRatingForm'
import addNewBeerForm from './addNewBeerForm'
  export default {
    data: () => ({
      selectedScreenData: 0,
    }),
    computed:{
      state(){
         return this.$store.getters.getModelState
      }
    },
    components:{
      addBeerRatingForm,
      addNewBeerForm
    },
    methods:{
        selectedScreen(number){
        this.selectedScreenData = number
      },
      open(){
        this.$store.dispatch("SaveModelState", true)
      }
    }
  }
</script>

<style>
.modelbackground{
    background: blanchedalmond !important;
}
</style>