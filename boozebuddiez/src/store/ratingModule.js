export default
{
    state:
    {
        rating: null
    },
    mutations: {
        SAVE_RATINGCOLLECTION(state, rating) {
          state.rating = rating;
        },
      },
      getters: {
        getratingcollection: state => {
          return state.rating;
        },
  
      },
      actions: {
        SaveRatingCollection({ commit }, rating) {
          commit("SAVE_RATINGCOLLECTION", rating);
        },
      }
}