<template>
 <div>
    <div class="row">
        <div class="col-12">My Friends</div>
    </div>
    <div v-for="friend in this.friends" :key="friend.id">
        <div >{{friend.userOneId.name}}.</div>
    </div>
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
    }
}
</script>

<style>

</style>