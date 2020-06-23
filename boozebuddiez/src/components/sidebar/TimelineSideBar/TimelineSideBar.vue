<template>
<div>
    <div class="row">
        <div class="col-12">My Timeline</div>
    </div>
    <div v-for="activity in this.activities.reverse()" :key="activity.id">
        <timelineCard v-bind:activity="activity"/>
    </div>
</div>
</template>

<script>
import timelineCard from './TimelineCard'
import axios from 'axios';
export default {
    components:{
    timelineCard,
    },
    computed:{
        activities(){
            return this.$store.getters.getTimeline
        }
    },
    mounted(){
        axios.get('http://217.101.44.31:8085/api/public/activity/getActivitiesOfMyFriends/'+this.$store.getters.getUser.id)
      .then(response => (
        this.$store.dispatch("SaveTimeline", response.data.activities)
        ))
    }
}
</script>

<style>

</style>