export default {
    state: {
      FocusedBar: {
          lat: 5.4,
          long: 51.4
      },
      NewBar: null,
    },
    mutations: {
      SAVE_BAR_FOCUS(state, bars) {
        
        state.FocusedBar = bars; 
      },
      SAVE_NEW_BAR(state, bar) {
        state.NewBar = bar;
      },
    },
    getters: {
      getBarFocus: state => {
        return state.FocusedBar;
      },
      getNewBar: state => {
        return state.NewBar;
      },
    },
    actions: {
      SaveBarFocus({ commit }, bars) {
        commit("SAVE_BAR_FOCUS", bars);
      },
      SaveNewBar({ commit }, bar) {
        commit("SAVE_NEW_BAR", bar);
      },
    }
  };