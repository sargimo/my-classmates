import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Tj from "./components/tj/Tj";
import Geoff from "./components/Geoff/Geoff";


Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Tj },
  { path: "/geoff", component: Geoff}
];

const router = new VueRouter({
  routes,
  mode: "history"
});

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
