export default {
    state: {
      FocusedBar: {
          lat: 5.4,
          long: 51.4
      },
    },
    mutations: {
      SAVE_BAR_FOCUS(state, bars) {
        state.FocusedBar = bars;
      },
    },
    getters: {
      getBarFocus: state => {
        return state.FocusedBar;
      },

    },
    actions: {
      SaveBarFocus({ commit }, bars) {
        commit("SAVE_BAR_FOCUS", bars);
      },
    }
  };