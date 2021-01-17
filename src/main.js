import Vue from 'vue'
import App from './App.vue'
import router from './router'

// import GAuth from 'vue-google-oauth2'
import {store} from './store/state'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


// const gauthOption = {
//   clientId: '804466472823-msg6b9r0nlmk6hdjttucjqcbsbbh8ja9.apps.googleusercontent.com',
//   scope: 'profile email',
//   prompt: 'select_account'
// }
// Vue.use(GAuth, gauthOption)
