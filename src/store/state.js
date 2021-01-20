import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store =  new Vuex.Store({
    state : {
      Id: -1,
      email:"",
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
      registration : "http://10.177.1.69:8082",
      merchant : "http://10.177.1.69:8081",
      product : "http://10.177.1.69:8085",
      order : "http://10.177.1.137:8082",
      search : "http://10.177.1.69:8086",
      cart : "http://10.177.1.137:8081"
    }
  })