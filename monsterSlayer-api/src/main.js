import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import VueResource from 'vue-resource';
import Vuelidate from 'vuelidate'
import VueRouter from 'vue-router';

import { routes } from "./routes.js";

const router = new VueRouter({
  routes,
  mode:'history'
});
Vue.use(Vuelidate);
Vue.use(VueResource);
Vue.use(VueRouter);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
