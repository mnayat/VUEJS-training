import Vue from 'vue';
import Vuelidate from 'vuelidate';
import App from './App.vue';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.use(Vuelidate);

new Vue({
  el: '#app',
  render: h => h(App)
})