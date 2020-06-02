import Vue from "vue";
import Vuex from "vuex";

import barModule from "./barModule";
import searchModule from "./searchModule";
import mapModule from './mapModule'
import userModule from "./userModule";
import ratingModule from "./ratingModule";


Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    barModule: barModule,
    searchModule: searchModule,
    mapModule: mapModule,
    userModule: userModule,
    ratingModule: ratingModule,
  }
});