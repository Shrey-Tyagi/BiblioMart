//Todo
<template>
    <div class="main">
        <section class="register">
            <div class="container">
                <div class="signup-container">
                    <div class="flex-container">
                        <h2>Sign up as Merchant</h2>
                        <form action="">
                            <div>
                                <label for="name">
                                    <i class="fa fa-user"></i>
                                </label>
                                <input type="text" name="name" id="name" placeholder="Your Name">
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
                                <input type="text" name="email" id="email" placeholder="Your Email">
                            </div>
                            <div>
                                <label for="password">
                                    <i class="fa fa-key"></i>
                                </label>
                                <input type="password" name="password" id="password" placeholder="password">
                            </div>
                            <div>
                                <label for="rePassword">
                                    <i class="fa fa-lock"></i>
                                </label>
                                <input type="password" name="rePassword" id="rePassword" placeholder="Repeat your password">
                            </div>
                            <button class="form-submit">Register</button>
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
import { mapActions } from "vuex";
export default {
  name: "MerchantRegistration",
  methods: {
    ...mapActions("account", {}),
  },
};
</script>

<style scoped>
*{
    box-sizing: border-box;
}

body {
    font-size: 13px;
    line-height: 1.8;
    color: #222;
    background: #f8f8f8;
    font-weight: 400;
    font-family: Monospace;
}

section{
    display: block;
    margin: 50px 0;
}

.container{
    background: #fff;
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

