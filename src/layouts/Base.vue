<template>
  <div>
      <nav class="main-flex" v-if="$store.state.Id != -1">
        <div class="tag-flex"> <h2> BiblioMart</h2> </div>
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
            <button class= "btn-nav">  LogOut </button>
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
            <button class= "btn-nav"> Register </button>
          </router-link>
        </div>
        <div class="child-flex-class-nav">
         <router-link to="/login">
            <button class= "btn-nav"> Login </button>
         </router-link>
         </div>
        <div class="child-flex-class-nav">
          <form @submit.prevent="getCart()">
              <button type="submit" class="btn btn-primary my-2 my-sm-0 cart" >
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
     <div>
        <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>About</h6>
            <p class="text-justify">Biblio.com  - This application is built to provide the one-stop platform for a book lover or book finder to sell and buy old and new books

- The app provides the contact details of the seller and brings the buyer and seller close

- Well managed categories and custom search to find the book you are searching for very easily

- Very easy and understandable UI/UX</p>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Makers</h6>
            <ul class="footer-links">
              <li><a href="#">Shikhar</a></li>
              <li><a href="#">Dinesh</a></li>
              <li><a href="#">Shrey</a></li>
              <li><a href="#">Vasavi</a></li>
              <li><a href="#">Vraj</a></li>
              <li><a href="#">Amit</a></li>
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
           <router-link to="/merchantRegister">
              <button type="submit" class="btn my-2 my-sm-0">
                  Merchant Registration
              </button>
          </router-link>
          <router-link to="/MerchantProduct">
              <button type="submit" class="btn my-2 my-sm-0">
                  Merchant Products
              </button>
          </router-link>
          </div>
        </div>
        <hr>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2020 All Rights Reserved by 
         <a href="#">BiblioMart</a>.
            </p>
          </div>
        </div>
      </div>
</footer>
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
      axios.get(this.$store.state.product + '/myproduct/getProducts/')
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
      let urlcart = this.$store.state.cart+'/cart/getcart/'+this.$store.state.Id
       if(this.$store.state.guestUserId != -1){
        urlcart = this.$store.state.cart+'/cart/getcart/'+this.$store.state.guestUserId
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
            let httpAddress = this.$store.state.registration+"/registration/profile/"+get;
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

.btn{
  width: 250px;
  padding: 15px 32px;
}
.cart{
background-color:#4C1D95
}
nav {
  background-color: #059669;
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
  background: #059669;
  border: #064E3B;
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
  margin-top:14px ;
  align-self: center;
  margin-left: 50px;
  color: black;
  align-self: center;
}

 .btn-nav{
   background-color: #064E3B;
   color: white;
 }
 .site-footer
{
  background-color:#065F46;
  padding:45px 0 20px;
  font-size:15px;
  line-height:24px;
  color:#737373;
}
.site-footer hr
{
  border-top-color:#bbb;
  opacity:0.5
}
.site-footer hr.small
{
  margin:20px 0
}
.site-footer h6
{
  color:#fff;
  font-size:16px;
  text-transform:uppercase;
  margin-top:5px;
  letter-spacing:2px
}
.site-footer a
{
  color:#737373;
}
.site-footer a:hover
{
  color:#3366cc;
  text-decoration:none;
}
.footer-links
{
  padding-left:0;
  list-style:none
}
.footer-links li
{
  display:block
}
.footer-links a
{
  color:#737373
}
.footer-links a:active,.footer-links a:focus,.footer-links a:hover
{
  color:#3366cc;
  text-decoration:none;
}
.footer-links.inline li
{
  display:inline-block
}
.site-footer .social-icons
{
  text-align:right
}
.site-footer .social-icons a
{
  width:40px;
  height:40px;
  line-height:40px;
  margin-left:6px;
  margin-right:0;
  border-radius:100%;
  background-color:#33353d
}
.copyright-text
{
  margin:0
}
@media (max-width:991px)
{
  .site-footer [class^=col-]
  {
    margin-bottom:30px
  }
}
@media (max-width:767px)
{
  .site-footer
  {
    padding-bottom:0
  }
  .site-footer .copyright-text,.site-footer .social-icons
  {
    text-align:center
  }
}
.social-icons
{
  padding-left:0;
  margin-bottom:0;
  list-style:none
}
.social-icons li
{
  display:inline-block;
  margin-bottom:4px
}
.social-icons li.title
{
  margin-right:15px;
  text-transform:uppercase;
  color:#96a2b2;
  font-weight:700;
  font-size:13px
}
.social-icons a{
  background-color:#eceeef;
  color:#818a91;
  font-size:16px;
  display:inline-block;
  line-height:44px;
  width:44px;
  height:44px;
  text-align:center;
  margin-right:8px;
  border-radius:100%;
  -webkit-transition:all .2s linear;
  -o-transition:all .2s linear;
  transition:all .2s linear
}
.social-icons a:active,.social-icons a:focus,.social-icons a:hover
{
  color:#fff;
  background-color:#29aafe
}
.social-icons.size-sm a
{
  line-height:34px;
  height:34px;
  width:34px;
  font-size:14px
}
.social-icons a.facebook:hover
{
  background-color:#3b5998
}
.social-icons a.twitter:hover
{
  background-color:#00aced
}
.social-icons a.linkedin:hover
{
  background-color:#007bb6
}
.social-icons a.dribbble:hover
{
  background-color:#ea4c89
}
@media (max-width:767px)
{
  .social-icons li.title
  {
    display:block;
    margin-right:0;
    font-weight:600
  }
}

/* div {
  box-shadow: 10px 10px 5px #5F9EA0;
} */

</style>