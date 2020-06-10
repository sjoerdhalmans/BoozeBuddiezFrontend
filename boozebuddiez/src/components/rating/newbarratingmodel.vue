<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" v-bind="attrs" v-on="on">Add new Rating</v-btn>
      </template>
      <barRating></barRating>
    </v-dialog>
  </v-row>
</template>

<script>
import barRating from '@/components/rating/barRating.vue';
export default {
  data: () => ({
    dialog: false,
  }),
  components: {
    barRating,
  },
  mounted() {
    this.loadBars();
  },
};
</script>

<style>
</style>