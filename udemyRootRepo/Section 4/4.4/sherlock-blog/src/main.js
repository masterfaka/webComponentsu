import Vue from 'vue'
import App from './App.vue'
import './web-components/blog-card'; //app lvl import

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
