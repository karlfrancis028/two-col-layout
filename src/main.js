import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import components from './components/index';

Object.keys(components).forEach((key) => {
  Vue.component(key, components[key]);
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
