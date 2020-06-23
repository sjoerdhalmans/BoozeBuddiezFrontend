export default {
    state: {
      beers: null,
    },
    mutations: {
      SAVE_BEERCOLLECTION(state, beers) {
        state.beers = beers;
      },
    },
    getters: {
      getBeerCollection: state => {
        return state.beers;
      },

    },
    actions: {
      SaveBeerCollection({ commit }, beers) {
        commit("SAVE_BEERCOLLECTION", beers);
      },
    }
  };  