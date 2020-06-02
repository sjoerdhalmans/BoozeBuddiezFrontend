import Vue from "vue";
import Vuex from "vuex";

import barModule from "./barModule";
import userModule from "./userModule";
import ratingModule from "./ratingModule";


Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    barModule: barModule,
    userModule: userModule,
    ratingModule: ratingModule,
  }
});