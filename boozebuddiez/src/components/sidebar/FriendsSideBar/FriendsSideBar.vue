<template>
    <div>
        <div class="row">
            <div class="col-12">My Friends</div>
        </div>
        <div v-for="friend in this.friends" :key="friend.id">
            <div>{{friend.userTwoId.name}}.</div>
        </div>
        <v-app>
            <v-row justify="center">
                <v-dialog v-model="dialog" persistent max-width="600px">
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn color="primary" dark v-bind="attrs" v-on="on">
                            Open Dialog
                        </v-btn>
                    </template>
                    <v-card>
                        <v-card-title>
                            <span class="headline">Add New Friend</span>
                        </v-card-title>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                            <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-row>
        </v-app>
    </div>
</template>


<script>
import axios from 'axios';
export default {
    name:"FriendsSideBar",
        computed:{
        friends(){
            return this.$store.getters.getFriends
        }
    },
        mounted(){
        axios.get('http://217.101.44.31:8082/api/public/friend/getFriendsByUserId/'+this.$store.getters.getUser.id)
      .then(response => (
        this.$store.dispatch("SaveFriends", response.data.relationships)
        ))
    },
     data: () => ({
      dialog: false,
    }),
}
</script>

<style>

</style>