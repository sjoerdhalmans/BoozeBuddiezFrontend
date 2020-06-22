import Vue from "vue";
import Vuex from "vuex";

import barModule from "./barModule";
import searchModule from "./searchModule";
import mapModule from './mapModule'
import userModule from "./userModule";
import ratingModule from "./ratingModule";
import timelineModule from './timelineModule';
import beerModule from './beerModule';
import createPersistedState from 'vuex-persistedstate'



Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    barModule: barModule,
    beerModule: beerModule,
    searchModule: searchModule,
    mapModule: mapModule,
    userModule: userModule,
    ratingModule: ratingModule,
    timelineModule: timelineModule,
  },
  plugins: [createPersistedState({
    storage: window.sessionStorage,
})],
});