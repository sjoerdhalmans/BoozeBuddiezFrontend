import Vue from "vue";
import Vuex from "vuex";

import barModule from "./barModule";


Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    barModule: barModule,
  }
});