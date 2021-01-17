// /src/Layout/Base.html
<template>
  <div>
    <div>
      <form @submit.prevent="getUser">
       <button> {{ this.$store.state.userName }} </button>
       </form>
      <!--<nav class="navbar navbar-expand-lg navbar-dark fixed-top">
        <router-link class="navbar-brand" to="/">BiblioMart</router-link>
        <div class="ml-auto">
          <div v-if="user.photoURL">
            <router-link to="/user">
            <img
               
              :src="user.photoURL"
              class="img-thumbnail profile-image"
              alt = "User Img"
            />
            <button @click="getUser"> {{ this.$store.state.userName }} </button>
            </router-link>
            <router-link class="btn btn-primary my-2 my-sm-0" to="/cart">
              <img
                src="https://pngimg.com/uploads/shopping_cart/shopping_cart_PNG38.png"
                width="50"
                alt
              />
              <span class="badge badge-danger badge-pill">{{ cart.length }}</span>
            </router-link>
          </div>
          <router-link class="btn btn-primary my-2 my-sm-0" to="/register">Register</router-link>
          <router-link class="btn btn-primary my-2 my-sm-0" to="/login">Login</router-link>
        </div>
      </nav>-->
    </div>
    <div class="page-container">
      <router-view />
    </div>

    <!-- Footer -->
<footer class="bg-light text-center text-lg-start">
  <!-- Grid container -->
  <div class="container p-4">
    <!--Grid row-->
    <div class="row">
      <!--Grid column-->
      <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
        <h5 class="text-uppercase">Footer Content</h5>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
          molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam
          voluptatem veniam, est atque cumque eum delectus sint!
        </p>
      </div>
      <!--Grid column-->

      <!--Grid column-->
      <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 class="text-uppercase">Links</h5>

        <ul class="list-unstyled mb-0">
          <li>
            <a href="#!" class="text-dark">Link 1</a>
          </li>
          <li>
            <a href="#!" class="text-dark">Link 2</a>
          </li>
          <li>
            <a href="#!" class="text-dark">Link 3</a>
          </li>
          <li>
            <a href="#!" class="text-dark">Link 4</a>
          </li>
        </ul>
      </div>
      <!--Grid column-->

      <!--Grid column-->
      <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 class="text-uppercase mb-0">Grow along with us!</h5>
          <router-link class="btn btn-primary my-2 my-sm-0" to="/merchantRegister">Merchant Register</router-link>

      </div>
      <!--Grid column-->
    </div>
    <!--Grid row-->
  </div>
  <!-- Grid container -->

  <!-- Copyright -->
  <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
    © 2020 Copyright:
    <a class="text-dark" href="#">BiblioMart.com</a>
  </div>
  <!-- Copyright -->
</footer>
<!-- Footer -->
  </div>
</template>



<script>
import axios from 'axios'
export default {
  name: "Base",
  computed: {
   
  },
  methods: {
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
</style>