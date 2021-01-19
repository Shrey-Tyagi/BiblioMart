//Todo
<template>
    <div class="body-main ">
        <section class="register">
            <div class="container">
                <div class="signup-container">
                    <div class="flex-container">
                        <h2>Sign up as Merchant</h2>
                        <form @submit.prevent="onSubmit">
                            <div>
                                <label for="name">
                                    <i class="fa fa-user"></i>
                                </label>
                                <input type="text" v-model="name" id="name" placeholder="Your Name" required>
                            </div>
                            <!-- <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              /> -->
                            <div>
                                <label for="email">
                                    <i class="fa fa-envelope"></i>
                                </label>
                                <input type="text" name="email" id="email" placeholder="Your Email" v-model="email" required>
                            </div>
                            <div>
                                <label for="password">
                                    <i class="fa fa-key"></i>
                                </label>
                                <input type="password" name="password" id="password" placeholder="password" v-model="password" required>
                            </div>
                            <div>
                                <label for="rePassword">
                                    <i class="fa fa-lock"></i>
                                </label>
                                <input type="password" name="rePassword" id="rePassword" placeholder="Repeat your password" v-model="rePassword" required>
                            </div>
                            <button class="btn btn-primary">Register</button> 
                        </form>
                    </div>
                    <div class="flex-container imgcontainer">
                        <img src="../../assets/BookImage.jpg" alt="" width="100%">
                    </div>
                </div>
            </div>
        </section>
    </div>
    
</template>

<script>
import axios from 'axios';
// import router from 'router';
export default {
    data(){
        return{
            name:"",
            email:"",
            password:"",
            rePassword:"",
        }
    },
  name: "MerchantRegistration",
  methods: {
    onSubmit(){
      if(this.password == this.rePassword){
          let data = {
              'merchantName':this.name,
              'password':this.password,
              "email":this.email
          }
          axios.post('http://localhost:8083/merchant/register', data)
            .then( (response) => {
                console.log(response);
                this.saveInStore(response);
            })

            .catch(function (error) {
                console.log(error);
            });

            
            
            
             this.$router.push({name:'MerchantProduct'})

            
         }
      else{
          alert("Enter the same password in both the fields");
      }
    },
        saveInStore(response){
        console.log(response);
        this.$store.state.Id = response.data.merchantId;
    
        return response.data.merchantId;
    },
}
}
</script>


<style scoped>
/* div {
  box-shadow: 10px 10px 5px grey;
} */
.body-main{
    box-sizing: border-box;
    font-size: 13px;
    line-height: 1.8;
    color: #222;
    font-weight: 400;
    font-family: Monospace;
}

section{
    display: block;
    margin: 50px 0;
}

.container{
    background: #f8f8f8;
    margin: 0 auto;
    border-radius: 20px;
    width: 70%;
}

.signup-container{
    padding: 75px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: auto;
}

.flex-container{
    width: 40%;
    margin: auto;
}

h2{
    line-height: 1.66;
    margin: 0;
    padding: 0;
    font-weight: bold;
    color: #222;
    font-size: 36px;
    margin-bottom: 30px;
}

.form-submit{
    display: inline-block;
    background: #6dabe4;
    color: #fff;
    width: auto;
    padding: 15px 39px;
    border-radius: 5px;
    border: 1px solid ;
    cursor: pointer;
    margin-top: 25px;
}

.form-submit:hover{
    background: #fff;
    color: #6dabe4;
}
input{
    display: inline-block;
    border: none;
    border-bottom: 1px solid #999;
    padding: 6px 30px;
    font-family: Poppins;
    box-sizing: border-box;
    margin-top: 25px;

}

input, select, textarea {
    outline: none;
}

i{
    display: inline-block;
}
@media only screen and (max-width: 840px){
    .container{
        width: 90%;
    }
}

@media only screen and (max-width: 700px){
    .flex-container {
        width: 100%;
        margin: auto;
    }
    .imgcontainer{
        display: none;
    }
    .container{
        width: 100%;
    }
}
</style>

