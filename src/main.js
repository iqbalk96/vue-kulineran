import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/main.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false

new Vue({
<<<<<<< HEAD
  router,
  render: h => h(App)
=======
  render: h => h(App),
>>>>>>> e1b2bf015b7d436cdbe4d042204fbbb7f05de348
}).$mount('#app')
