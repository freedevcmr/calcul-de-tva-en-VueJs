import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//on charge le ccs bootstrap
import "bootstrap/dist/css/bootstrap.css"

new Vue({
  render: h => h(App),
}).$mount('#app')
