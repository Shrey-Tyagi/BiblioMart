<template>
  <div>
      <nav class="main-flex" v-if="$store.state.Id != -1">
        <div class="tag-flex"> <h2> BiblioMart </h2> </div>
      <div class="flex-class-nav">
        <div class="child-flex-class-nav">
          <Search/>
        </div>
        <div class="child-flex-class-nav">
          <form @submit.prevent="getUser">
          <button> {{ this.$store.state.userName }} </button>
          </form>
        </div>
        <div class="child-flex-class-nav">
          <form @submit.prevent="getCart">
              <button type="submit" class="btn btn-primary my-2 my-sm-0">
                  <img
                    src="https://pngimg.com/uploads/shopping_cart/shopping_cart_PNG38.png"
                    width="50"
                    alt
                  />
            </button>
          </form>
        </div>
        <div class="child-flex-class-nav">
          <form @submit.prevent="logout()">
            <button>  LogOut </button>
          </form>
        </div>
      </div>
      </nav>
      <nav v-else class="main-flex">
        <div class="tag-flex"> <h2> BiblioMart </h2> </div>
      <div class="flex-class-nav">
        <div class="child-flex-class-nav">
         <Search/>
        </div>
        <div class="child-flex-class-nav">
          <router-link to="/register">
            <button> Register </button>
          </router-link>
        </div>
        <div class="child-flex-class-nav">
         <router-link to="/login">
            <button> Login </button>
         </router-link>
         </div>
        <div class="child-flex-class-nav">
          <form @submit.prevent="getCart()">
              <button type="submit" class="btn btn-primary my-2 my-sm-0">
                  <img
                    src="https://pngimg.com/uploads/shopping_cart/shopping_cart_PNG38.png"
                    width="50"
                    alt
                  />
            </button>
          </form>
        </div>
      </div>
      </nav>
    <div class="page-container">
      <router-view />
      <ProductsView/>
    </div>
  </div>
</template>

<script>


import axios from 'axios'
import ProductsView from '../views/home/ProductsView.vue';
import Search from '../views/home/Search.vue';

// import router from 'router'
export default {
  components: { ProductsView, Search },
  name: "Base",
  computed: {
  //  ProductCartCollection
  },
  methods: {
    logout(){
      this.$store.state.Id = -1;
      //this.$store.state.productList = [],
      this.$store.state.userDetails = {},
      this.$store.state.userName = "",
      this.$store.state.mainProducts = [],
      this.$store.state.singleProduct = {},
      this.$store.state.productId= 1,
      this.$store.state.userCart= [],
      this.$store.state.orderHistory= [],
      this.$store.state.orderProduct={},
      this.$store.state.searchedProducts=[],
      this.$store.state.guestUserId = -1
      this.$router.push({name:"home"})
    },
    getProduct(){
      axios.get('http://localhost:8085/myproduct/getProducts/')
            .then((response)=>{
                console.log(response);
                this.saveInProd(response);
            });
            // this.$router.push({name:''}); 
    },
    saveInProd(response){
      this.$store.state.mainProductList = response.data;
      // return response.data;
      console.log(this.$store.state.mainProductList);
      },
    getCart(){
      let urlcart = 'http://localhost:8087/cart/getcart/'+this.$store.state.Id
       if(this.$store.state.guestUserId != -1){
        urlcart = 'http://localhost:8087/cart/getcart/'+this.$store.state.guestUserId
       }
      axios.get(urlcart)
            .then((response)=>{
                console.log(response);
                this.saveInCart(response);
            });
            this.$router.push({path:"/cart"}); 
    },
    saveInCart(response){
      this.$store.state.userCart = response.data;
      // return response.data;
      console.log(this.$store.state.userCart);
      },
    getUser(){
      let get = this.$store.state.Id
            console.log(get)
            let httpAddress = "http://localhost:8082/registration/profile/"+get;
            console.log(httpAddress);
            axios.get(httpAddress)
            .then((response)=>{
                console.log(response);
                this.$store.state.userDetails= response.data;
              this.$store.state.Id = response.data.userId;
              //return response.data;
                // this.saveInMer(response);
            });
            console.log("Hello");
           this.$router.push({path:'/user'}); 
    }
  },
   beforeMount(){
    this.getProduct()
 }
};
</script>

//cs-ecommerce/src/layout/Base.vue
<style>
nav {
  background-color: teal;
}
.navbar-brand {
  font-weight: bold;
  font-size: 25px;
  color: #ffffff !important;
}
.profile-image {
  width: 50px;
  border-radius: 100% !important;
}
.page-container {
  padding-top: 81px;
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
input {
  border-radius: 0%;
}
.btn:focus {
  background: teal;
}

.flex-class-nav{
  align-content: center;
  display: flex;
  justify-content: flex-end;
}

.child-flex-class-nav{
  margin-right: 60px ;
  align-self: center;
}

.main-flex{
  display: flex;
  justify-content: space-between;
  align-content: center;
}

.tag-flex{
  align-self: center;
  margin-left: 50px;
  color: palevioletred;
  align-self: center;
}

/* div {
  box-shadow: 10px 10px 5px #5F9EA0;
} */

</style>