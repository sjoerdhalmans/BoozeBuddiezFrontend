export default
{
    state:
    {
        rating: null,
        modelState: false,
        detailedBarRating: null
    },
    mutations: {
        SAVE_RATINGCOLLECTION(state, rating) {
          state.rating = rating;
        },
        SAVE_MODEL_STATE(state, modelstate) {
          state.modelState = modelstate;
        },
        SAVE_DETAILED_BAR_RATING(state, detailedBarRating) {
          state.detailedBarRating = detailedBarRating;
        },
      },
      getters: {
        getratingcollection: state => {
          return state.rating;
        },
        getModelState: state => {
          return state.modelState;
        },
        getDetailedBarRating: state => {
          return state.detailedBarRating;
        },
      },
      actions: {
        SaveRatingCollection({ commit }, rating) {
          commit("SAVE_RATINGCOLLECTION", rating);
        },
        SaveModelState({ commit }, state) {
          commit("SAVE_MODEL_STATE", state);
        },
        SaveDetailedBarRating({ commit }, state) {
          commit("SAVE_DETAILED_BAR_RATING", state);
        },
      }
}