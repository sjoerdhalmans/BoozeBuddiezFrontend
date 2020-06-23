<template>
  <div class="timeline">
    <div class="row">
      <div class="col-12">My Timeline</div>
    </div>
    <div v-for="activity in this.activities" :key="activity.id">
      <timelineCard v-bind:activity="activity" />
    </div>
  </div>
</template>

<script>
import timelineCard from "./TimelineCard";
import axios from "axios";
export default {
  components: {
    timelineCard
  },
  computed: {
    activities() {
        try {
            return this.$store.getters.getTimeline.slice().reverse();
        } catch (error) {
            console.log(error)
            return null
        }
    }
  },
  mounted() {
    axios
      .get(
        "http://217.101.44.31:8085/api/public/activity/getActivitiesOfMyFriends/" +
          this.$store.getters.getUser.id
      )
      .then(
        response => (
          console.log("hello"),
          console.log(response.data),
          this.$store.dispatch("SaveTimeline", response.data.activities)
        )
      );
  }
};
</script>

<style>
.timeline {
  overflow-x: hidden;
  overflow-y: auto;
  max-height: 570px;
}

.timeline::-webkit-scrollbar {
  /* WebKit */
  width: 0;
  height: 0;
}
</style>