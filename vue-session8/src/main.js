import Vue from 'vue';
import App from './App.vue';
import App2 from './App2.vue';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.directive('highlights', {
  bind(el, binding, vnode){
    el.style.backgroundColor = 'red';
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
