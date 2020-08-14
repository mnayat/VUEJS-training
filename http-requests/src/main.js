import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/scss/bootstrap.scss'
import VueResource from 'vue-resource'
import 'jquery/dist/jquery'
import 'bootstrap'

Vue.use(VueResource);

new Vue({
  el: '#app',
  render: h => h(App)
})
