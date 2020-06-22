<template>
    <div>
        <div class="row">
            <div class="col-12">My Friends</div>
        </div>
        <div v-for="friend in this.friends" :key="friend.id">
            <div>{{friend.userTwoId.name}}.</div>
        </div>
        <v-app>
            <AddNewFriendModel></AddNewFriendModel>
        </v-app>
    </div>
</template>


<script>
import axios from 'axios';
import AddNewFriendModel from '../../sidebar/FriendsSideBar/AddNewFriendModel.vue'
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
    components:{
      AddNewFriendModel,
    },
     
}
</script>

<style>

</style>