export default {
    state: {
      Bars: null,
    },
    mutations: {
      SAVE_BARCOLLECTION(state, bars) {
        state.Bars = bars;
      },
    },
    getters: {
      getBarCollection: state => {
        return state.Bars;
      },

    },
    actions: {
      SaveBarCollection({ commit }, bars) {
        commit("SAVE_BARCOLLECTION", bars);
      },
    }
  };