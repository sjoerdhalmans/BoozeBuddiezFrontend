export default
{
    state:
    {
        rating: null,
        modelState: false
    },
    mutations: {
        SAVE_RATINGCOLLECTION(state, rating) {
          state.rating = rating;
        },
        SAVE_MODEL_STATE(state, modelstate) {
          state.modelState = modelstate;
        },
      },
      getters: {
        getratingcollection: state => {
          return state.rating;
        },
        getModelState: state => {
          return state.modelState;
        },
      },
      actions: {
        SaveRatingCollection({ commit }, rating) {
          commit("SAVE_RATINGCOLLECTION", rating);
        },
        SaveModelState({ commit }, state) {
          commit("SAVE_MODEL_STATE", state);
        },
      }
}