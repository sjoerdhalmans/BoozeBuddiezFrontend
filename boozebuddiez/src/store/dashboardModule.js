export default {
    state: {
        bar: null,
        EditBeer: null,
        AddBeer: null
    },
    mutations: {
      SAVE_BAR(state, bar) {
        state.bar = bar;
      },
      SAVE_ADD_BEER(state, beer) {
        state.AddBeer = beer;
      },
      SAVE_EDIT_BEER(state, beer) {
        state.EditBeer = beer;
      },
    },
    getters: {
      getDashboardBar: state => {
        return state.bar;
      },
      getDashboardEditBeer: state => {
        return state.EditBeer;
      },
      getDashboardAddBeer: state => {
        return state.AddBeer;
      },

    },
    actions: {
      SaveBar({ commit }, bar) {
        commit("SAVE_BAR", bar);
      },
      SaveAddBeer({ commit }, beer) {
        commit("SAVE_ADD_BEER", beer);
      },
      SaveEditBeer({ commit }, beer) {
        commit("SAVE_EDIT_BEER", beer);
      },
    }
  };  