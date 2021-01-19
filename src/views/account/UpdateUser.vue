<template>
    <div class="wrapper" style='background-image: url("../../assets/BookImage.jpg");'>		
    <div class="inner">
        <div class="image-holder">
            <img src="../../assets/BookImage.jpg" alt="BookImg">
        </div>
        <form @submit.prevent="update">
            <h3>Updation Form</h3>
            <div class="form-group">
                <input type="text" placeholder="Name" v-model="name" class="form-control">
            </div>
            <div class="form-wrapper">
                Email:- {{this.$store.state.userDetails.email}}
            </div>
            <div class="form-wrapper">
                <input type="text" placeholder="Enter your Age" v-model="age" class="form-control">
                <i class="zmdi zmdi-lock"></i>
            </div>
            <div class="form-wrapper">
                <input type="text" placeholder="Address" v-model="address" class="form-control">
                <i class="zmdi zmdi-lock"></i>
            </div>
            <div class="form-wrapper">
                <input type="password" placeholder="Password" v-model="password" class="form-control">
                <i class="zmdi zmdi-lock"></i>
            </div>
            <div class="form-wrapper">
                <input type="password" placeholder="Confirm Password" v-model="rePassword" class="form-control" required>
                <i class="zmdi zmdi-lock"></i>
            </div>
            
            <button>Update
                <i class="zmdi zmdi-arrow-right"></i>
            </button>
           
        </form>
    </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "Register",
    data(){
        return{
            email: this.$store.state.userDetails.email,
            password: "",
            rePassword:"",
            image: "https://www.w3schools.com/css/img_5terre.jpg",
            name: this.$store.state.userName,
            gender: "",
            age: this.$store.state.userDetails.age,
            address: this.$store.state.userDetails.address
        }
    },
    methods:{
        update(){
            if(this.password != this.rePassword){
                alert("Enter the same Password in both the fields");
            } 
            else{this.putData()}
        },
        putData(){
            let get = {
              "userId":this.$store.state.Id, 
              "email":this.email,
              "password":this.password,
              "image":this.image,
              "name":this.name,
              "gender":this.gender,
              "age":this.age,
              "address":this.address,
              "fb": 0,
              "gmail": 0,
              "timestamps": null,
              "accessTokenFb": 0,
              "accessTokenGmail": 0
              }
            axios.put('http://10.177.1.69:8089/registration/updateProfile', get)
            .then((response)=>{
                console.log(response);
                this.saveInUser(response);
            });
            this.$router.push({path:'/user'})
          
            // this.$router.push({name:'MerchantProduct'}); 
        },
  saveInUser(response){
  this.$store.state.userDetails= response.data;
  this.$store.state.Id = response.data.userId;
  this.$store.state.userName = response.data.name;
  return response.data;
  },
  // getUser(){
  // let get = {"email":this.email,"password":this.password}
  // axios.post('http://localhost:8082/merchant/login/',get)
  //           .then((response)=>{
  //               console.log(response);
  //               this.saveInUser(response);
  //           });
  // }
  // },
        }
    }

</script>


<style scoped>
@font-face {
  font-family: "Poppins-Regular";
  src: url("fonts/poppins/Poppins-Regular.ttf"); }
@font-face {
  font-family: "Poppins-SemiBold";
  src: url("fonts/poppins/Poppins-SemiBold.ttf"); }
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box; }

body {
  font-family: "Poppins-Regular";
  color: #333;
  font-size: 13px;
  margin: 0; }

input, textarea, select, button {
  font-family: "Poppins-Regular";
  color: #333;
  font-size: 13px; }

p, h1, h2, h3, h4, h5, h6, ul {
  margin: 0; }

img {
  max-width: 100%; }

ul {
  padding-left: 0;
  margin-bottom: 0; }

a:hover {
  text-decoration: none; }

:focus {
  outline: none; }

.wrapper {
  min-height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center; }

.inner {
  padding: 20px;
  background: #fff;
  max-width: 850px;
  margin: auto;
  display: flex; }
  .inner .image-holder {
    width: 50%; }
  .inner form {
    width: 50%;
    padding-top: 36px;
    padding-left: 45px;
    padding-right: 45px; }
  .inner h3 {
    text-transform: uppercase;
    font-size: 25px;
    font-family: "Poppins-SemiBold";
    text-align: center;
    margin-bottom: 28px; }

.form-group {
  display: flex; }
  .form-group input {
    width: 50%; }
    .form-group input:first-child {
      margin-right: 25px; }

.form-wrapper {
  position: relative; }
  .form-wrapper i {
    position: absolute;
    bottom: 9px;
    right: 0; }

.form-control {
  border: 1px solid #333;
  border-top: none;
  border-right: none;
  border-left: none;
  display: block;
  width: 100%;
  height: 30px;
  padding: 0;
  margin-bottom: 25px; }
  .form-control::-webkit-input-placeholder {
    font-size: 13px;
    color: #333;
    font-family: "Poppins-Regular"; }
  .form-control::-moz-placeholder {
    font-size: 13px;
    color: #333;
    font-family: "Poppins-Regular"; }
  .form-control:-ms-input-placeholder {
    font-size: 13px;
    color: #333;
    font-family: "Poppins-Regular"; }
  .form-control:-moz-placeholder {
    font-size: 13px;
    color: #333;
    font-family: "Poppins-Regular"; }

select {
  -moz-appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
  padding-left: 20px; }
  select option[value=""][disabled] {
    display: none; }

button {
  border: none;
  width: 164px;
  height: 51px;
  margin: auto;
  margin-top: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  background: #333;
  font-size: 15px;
  color: #fff;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s; }
  button i {
    margin-left: 10px;
    -webkit-transform: translateZ(0);
    transform: translateZ(0); }
  button:hover i, button:focus i, button:active i {
    -webkit-animation-name: hvr-icon-wobble-horizontal;
    animation-name: hvr-icon-wobble-horizontal;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
    -webkit-animation-iteration-count: 1;
    animation-iteration-count: 1; }

@-webkit-keyframes hvr-icon-wobble-horizontal {
  16.65% {
    -webkit-transform: translateX(6px);
    transform: translateX(6px); }
  33.3% {
    -webkit-transform: translateX(-5px);
    transform: translateX(-5px); }
  49.95% {
    -webkit-transform: translateX(4px);
    transform: translateX(4px); }
  66.6% {
    -webkit-transform: translateX(-2px);
    transform: translateX(-2px); }
  83.25% {
    -webkit-transform: translateX(1px);
    transform: translateX(1px); }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0); } }
@keyframes hvr-icon-wobble-horizontal {
  16.65% {
    -webkit-transform: translateX(6px);
    transform: translateX(6px); }
  33.3% {
    -webkit-transform: translateX(-5px);
    transform: translateX(-5px); }
  49.95% {
    -webkit-transform: translateX(4px);
    transform: translateX(4px); }
  66.6% {
    -webkit-transform: translateX(-2px);
    transform: translateX(-2px); }
  83.25% {
    -webkit-transform: translateX(1px);
    transform: translateX(1px); }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0); } }
@media (max-width: 1199px) {
  .wrapper {
    background-position: right center; } }
@media (max-width: 991px) {
  .inner form {
    padding-top: 10px;
    padding-left: 30px;
    padding-right: 30px; } }
@media (max-width: 767px) {
  .inner {
    display: block; }
    .inner .image-holder {
      width: 100%; }
    .inner form {
      width: 100%;
      padding: 40px 0 30px; }

  button {
    margin-top: 60px; } }

</style>