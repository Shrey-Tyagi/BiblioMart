<template>
  <div>
    <div class="container" style="padding-top: 10%">
      <div class="row d-flex justify-content-center">
        <div class="col-5 text-left login-form-container">
          <div class="d-flex justify-content-center">
            <img src="https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/8-512.png" width="150" alt="">
          </div>
          <div>
            <form @submit.prevent="getData" @submituser.prevent="getUser">
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                v-model="email"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" class="form-control" v-model="password" id="exampleInputPassword1" />
            </div>
            <div class="form-group form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1" />
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" class="btn btn-primary btn-block">Login</button>
            <button type="submituser" class="btn btn-primary btn-block">Login user</button>
            <router-link to="/MerchantProduct">
            <button class="btn btn-primary btn-block">Merchant product list!</button> 
            <!-- shift to a different merchant page -->
            </router-link>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import axios from 'axios';

export default {
  name: "Login",
  data(){
    return {
        email: '',
        password: ''
    }
  },
  methods: {
  getData(){
            let get = {"email":this.email,"password":this.password}
            axios.post('http://localhost:8083/merchant/login/',get)
            .then((response)=>{
                console.log(response);
                this.saveInUser(response);
            });
            this.$router.push({name:'MerchantProduct'}); 
        },
  saveInUser(response){
  this.$store.state.productList= response.data.productDetails;
  this.$store.state.Id = response.data.merchantId;
  return response.data;
  }
  },
};
</script>

<style>
.form-control {
  border-radius: 0%;
  height: 50px;
}
.login-form-container {
  padding: 20px;
  box-shadow: 0px 2px 5px 2px #888888;
}
.btn {
  border-radius: 0%;
  font-weight: bold;
  background: teal;
  border: teal;
}
.btn:hover {
  background: #00b4b4;
}
.btn:focus {
  background: teal;
}
</style>
