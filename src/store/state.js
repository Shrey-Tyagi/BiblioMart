import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store =  new Vuex.Store({
    state : {
      Id: -1,
      // merDetails:[],
      mainProductList:[],
      productList:[],
      userDetails:{},
      userName: "",
      mainProducts:[],
      singleProduct: {},
      productId: 1,
      userCart: [],
      orderHistory: [],
      orderProduct:{},
      searchedProducts:[],
      guestUserId : -1,
      registration : "http://10.177.1.69:8089",
      merchant : "http://10.177.1.69:8089",
      product : "http://10.177.1.69:8089",
      order : "http://10.177.1.69:8089",
      search : "http://10.177.1.69:8089",
      cart : "http://10.177.1.69:8089"
    }
  })