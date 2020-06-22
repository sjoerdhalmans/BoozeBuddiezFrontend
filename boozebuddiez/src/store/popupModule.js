export default {
    state: {
        popupState: 0,
    },
    mutations: {
        SAVE_POPUP_STATE(state, popupState) {
        state.popupState = popupState; 
      },

    },
    getters: {
      getPopupState: state => {
        return state.popupState;
      },

    },
    actions: {
      SavePopupState({ commit }, popupState) {
        commit("SAVE_POPUP_STATE", popupState);
      },
    }
  };