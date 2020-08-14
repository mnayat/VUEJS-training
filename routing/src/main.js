import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/scss/bootstrap.scss'
import VueRouter from 'vue-router';

import { routes } from "./routes.js";

const router = new VueRouter({
  routes,
  mode:'history'
});

Vue.use(VueRouter);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
