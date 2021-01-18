import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store =  new Vuex.Store({
    state : {
      Id: -1,
      // merDetails:[],
      productList:[],
      userDetails:{},
      userName: "",
      mainProducts:[],
      singleProduct: {},
      productId: 1
    }
  })