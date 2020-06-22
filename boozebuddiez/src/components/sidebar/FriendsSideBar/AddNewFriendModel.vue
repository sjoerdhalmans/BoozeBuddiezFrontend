<template class="newFriendButton">
  <v-row justify="center">
    <v-dialog v-model="this.state" persistent max-width="500px">
        <template v-slot:activator="{ on, attrs }">
            <v-btn color=#795548 dark v-bind="attrs" v-on="on" v-on:click="open">
                Add New Friend
            </v-btn>
        </template>
        <v-card class = "modelbackground">
            <v-card-title>
                <span class="headline">Add New Friend</span>
            </v-card-title>
            
            <v-card-text>
                <v-row>
                    <v-col cols="12" sm="6">
                        <v-text-field label="Username" required v-model='user.name'></v-text-field>
                    </v-col>
                </v-row>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">Close</v-btn>
                <v-btn color="blue darken-1" text @click="add">Add</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</v-row>

</template>

<script>
import axios from 'axios'
export default {
    
    data: () => ({
      dialog: false,
      user:{
          name: null,
      },
      friend: null,
    }),
    computed:{
      state(){
         return this.$store.getters.getModelState
      }
    },
    methods:{
        close(){
        this.$store.dispatch("SaveModelState", false)
        },
        add(){
        this.$store.dispatch("SaveModelState", false)
        this.sendToDB();
        },
        open(){
        this.$store.dispatch("SaveModelState", true)
      },
      sendToDB(){
      axios.post("http://217.101.44.31:8083/api/public/user/getUserByUsername", {
            username: this.user.name
            }).then(respone => {
                if (respone.status == 200) {
                  this.friend = respone.data;
                  console.log(this.friend);
            }
        });
      },
    }
}
</script>

<style>
.theme--light.v-application{
    background: none !important;
}

.v-application--wrap{
    min-height: 0vh !important;
}

.modelbackground{
    background: blanchedalmond !important;
}
</style>