export default {
    state: {
      activities: null,
    },
    mutations: {
        SAVE_TIMELINE(state, activities)   {
            state.activities = activities;
          },
    },
    getters: {
      getTimeline: state => {
        return state.activities;
      },

    },
    actions: {
        SaveTimeline({ commit }, activities) {
            commit("SAVE_TIMELINE", activities);
          },
      }
  };