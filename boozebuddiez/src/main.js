import Vue from "vue";
import App from "./App.vue";
import router from './router'
import store from './store'
import Toasted from 'vue-toasted';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import jQuery from 'jquery'
// Import the Auth0 configuration
import { domain, clientId } from "../auth_config.json";


// Import the plugin here
import { Auth0Plugin } from "./auth";

import vuetify from './plugins/vuetify';

Vue.use(Toasted)
// Vue.use(jQuery)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

// Install the authentication plugin here
Vue.use(Auth0Plugin, {
  domain,
  clientId,
  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount("#app");