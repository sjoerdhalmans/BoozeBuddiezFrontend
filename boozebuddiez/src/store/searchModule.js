export default {
    state: {
      searchResult: null,
    },
    mutations: {
        SAVE_SEARCH_RESULT(state, bars) {
            state.searchResult = bars;
          },
    },
    getters: {
      getSearchResult: state => {
        return state.searchResult;
      },

    },
    actions: {
        SaveSearchResult({ commit }, bars) {
            commit("SAVE_SEARCH_RESULT", bars);
          },
      }
  };