import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

// import GAuth from 'vue-google-oauth2'
import {store} from './store/state'

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyDvVQAUpXs8rd3pJYSywNF9z_TkAtu_YEQ",
  authDomain: "vue-http-demo-c1307.firebaseapp.com",
  databaseURL: "https://vue-http-demo-c1307-default-rtdb.firebaseio.com",
  projectId: "vue-http-demo-c1307",
  storageBucket: "vue-http-demo-c1307.appspot.com",
  messagingSenderId: "776831313464",
  appId: "1:776831313464:web:7911352ae9ca4f3190e8cd"
});

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
