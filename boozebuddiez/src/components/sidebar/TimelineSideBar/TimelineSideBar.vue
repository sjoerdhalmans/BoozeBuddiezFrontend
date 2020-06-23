<template>
<div>
    <div class="row">
        <div class="col-12 timeline">My Timeline</div>
    </div>
    <div v-for="activity in this.activities" :key="activity.id">
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
            return this.$store.getters.getTimeline.slice().reverse()
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
.timeline {
  overflow-x: hidden;
  overflow-y: auto;
}

.timeline::-webkit-scrollbar { /* WebKit */
    width: 0;
    height: 0;
}
</style>