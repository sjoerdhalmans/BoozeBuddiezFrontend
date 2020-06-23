<template>
    <div class="friends">
        <div class="row">
            <div class="col-12 friends">My Friends</div>
        </div>
        <div v-for="friend in this.friends" :key="friend.id">
            <div>{{friend.name}}.</div>
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
    data(){
        return{
            array:[]
        }
    },
        computed:{
        friends(){
            return this.$store.getters.getFriends
        }
    },
        mounted(){
        axios.get('http://217.101.44.31:8082/api/public/friend/getFriendsByUserId/'+this.$store.getters.getUser.id)
      .then(response => (
        response.data.relationships.forEach(relationships => {
            if(relationships.userOneId.id === this.$store.getters.getUser.id){
                return this.array.push(relationships.userTwoId)
            }
            return this.array.push(relationships.userOneId)
        }),
        console.log(this.array),
        this.$store.dispatch("SaveFriends", this.array)
        ))
    },
    components:{
      AddNewFriendModel,
    },
     
}
</script>

<style>
.friends {
  overflow-x: hidden;
  overflow-y: auto;
  max-height: 570px;
}

.friends::-webkit-scrollbar {
  /* WebKit */
  width: 0;
  height: 0;
}

</style>