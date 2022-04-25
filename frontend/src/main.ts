import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

Vue.config.productionTip = false;

// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
