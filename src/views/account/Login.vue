<template>
  <div>
    <div class="container" style="padding-top: 10%">
      <div class="row d-flex justify-content-center">
        <div class="col-5 text-left login-form-container">
          <div class="d-flex justify-content-center">
            <img src="https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/8-512.png" width="150" alt="">
          </div>
          <div>
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
            <form @submit.prevent="getData">
            <button type="submit" class="btn btn-primary button-border-radius btn-block">Login Merchant</button>
            </form>
            <br>
            <form @submit.prevent="getUser">
            <button type="submituser" class="btn btn-primary button-border-radius btn-block">Login user</button>
            <!--<router-link to="/MerchantProduct">
            <button class="btn btn-primary btn-block">Merchant product list!</button> 
            shift to a different merchant page
            </router-link>-->
            <br>
            <router-link to='/'>
              <button class="btn btn-primary button-border-radius btn-block"> Home </button>
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
            console.log(get)
            axios.post(this.$store.state.merchant+'/merchant/login/',get)
            .then((response)=>{
                console.log(response);
                this.saveInMer(response);
            });
 
            if(this.$store.state.Id != -1){
              console.log(this.$store.state.Id);
              this.$router.push({name:'MerchantProduct'});
            }else{
              alert("Please enter correct details");
            }
            
        },
  saveInMer(response){
  this.$store.state.productList= response.data.productDetails;
  this.$store.state.Id = response.data.merchantId;
  return response.data;
  },//to getUSer is for user and get data for merchant 
  saveInUser(response){
  this.$store.state.Id = response.data.userId;
  this.$store.state.userName= response.data.name;
  this.$store.state.userDetails.email = response.data.email;
  console.log(response);
  },
  getCartUpdate(){
      let urlcart = this.$store.state.cart+'/cart/getcart/'+this.$store.state.guestUserId
      axios.get(urlcart)
            .then((response)=>{
              console.log("****************DB return of guestcart")
                console.log(response);
                this.saveInCart(response);
            });
    },
  saveInCart(response){
        this.$store.state.userCart = response.data;
        // return response.data;
        console.log(this.$store.state.userCart);
      },
  getUser(){
  if(this.$store.state.guestUserId!=-1){
    this.getCartUpdate();
  }
  let get = {"email":this.email,"password":this.password}
  console.log(get);
  axios.post(this.$store.state.registration+'/registration/login/',get)
            .then((response)=>{
                console.log("***************response of login request");
                this.saveInUser(response);
/////
  let cartDetails = this.$store.state.userCart
  for(let i=0;i<cartDetails.length;i++){
    let userId = this.$store.state.Id;
    let productId =cartDetails[i].productId;
    let productName= cartDetails[i].productName;
    let quantity = cartDetails[i].quantity;
    let merchantId = cartDetails[i].merchantId;
    let cost = cartDetails[i].cost;
      let addToCartdata = {
          "userId": userId,
          "productId" :productId,
          "productName" :productName,
          "quantity":quantity,
          "merchantId":merchantId,
          "cost":cost
        }
    axios.post(this.$store.state.cart+'/cart/cartadd',addToCartdata)
                .then( (response) => {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
  }

// console.log('************************');
// console.log(this.$store.state.userCart);
// console.log('************************');

////
////
      let urlDel=this.$store.state.cart+"/cart/cartdel/"+this.$store.state.guestUserId;
      axios.delete(urlDel)
                  .then( (response) => {
                      console.log(response);
                      this.getCartUpdate();
                  })    
                  .catch(function (error) {
                      console.log(error);
                  });

this.$store.state.guestUserId=-1;

////
            });
            if(this.$store.state.Id != -1){
              this.$router.push({name:'home'});
            }else{
              alert("Please enter correct details");
            }
      },
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
  background: #6b42b6;
}
.btn:focus {
  background: rgb(122, 23, 250);
}

.button-border-radius{
  border-radius:8px;
  margin-bottom: 10px;
}

</style>
