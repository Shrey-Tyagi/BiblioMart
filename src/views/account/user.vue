//add store and dynamically update 
<template>
    <div class="body-user">
    <div class="container1-user">
        <section class="section-user">
                <div class="profile-container-user">
                    <div class="flex-container-user">
                        <h2>Profile</h2>
                        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" width="100%">
                    </div>
                    <div class="flex-container-user">
                        <table>
                            <tr>
                                <td><b>Name : </b></td>
                                <td> {{getData.name}} </td>
                            </tr>
                            <tr>
                                <td><b>Email : </b></td>
                                <td> {{getData.email}} </td>
                            </tr>
                            <tr>
                                <td><b>Age : </b></td>
                                <td> {{getData.age}} </td>
                            </tr>
                            <tr>
                                <td><b>Gender : </b></td>
                                <td> {{getData.gender}} </td>
                            </tr>
                            <tr>
                                <td><b>Address : </b></td>
                                <td> {{getData.address}} </td>
                            </tr>
                        </table>
                        <router-link to="/userhistory">
                        <button class="form-submit-user">Login History</button>
                        </router-link>
                        <router-link to="/updateuser">
                        <button class="form-submit-user">Update Profile</button>
                        </router-link>
                        <form @submit.prevent="OrderHistory">
                        <button class="form-submit-user">Order History</button>
                        </form>
                    </div>
                </div>
        </section>
    </div>
    </div>
</template>
    
<script>
import axios from 'axios'
export default {
    name: 'user',//add store and dynamically update 
    computed: {
        getData(){
            return this.$store.state.userDetails;
        },
    },
    methods: {
        OrderHistory(){
         
            let urlOrder=this.$store.state.order+'/order/timeStamps/'+this.$store.state.Id;
            axios.get(urlOrder)
                .then((response)=>{
                        console.log(response);
                        this.saveInOrderHistory(response);
                 });
            this.$router.push({name:'orderhistory'}); 
    },
        saveInOrderHistory(response){
        this.$store.state.orderHistory = response.data;
        // return response.data;
        console.log(this.$store.state.orderHistory);
        },
        }
        
    }
</script>

<style scoped>
body-user{
    box-sizing: border-box;
    font-size: 13px;
    line-height: 1.8;
    color: #222;
    font-weight: 400;
    font-family: Monospace;
}

section-user{
    display: block;
    margin: 50px 0;
}

.container1-user{
    background: #f8f8f8;
    margin: 10px auto;
    border-radius: 20px;
    width: 70%;
}

.profile-container-user{
    padding: 75px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: auto;
}

.flex-container-user{
    width: 40%;
    margin: auto;
}

tr{
    font-size: 16px;
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

@media only screen and (max-width: 1000px){
    .container1-user{
        width: 80%;
    }
}

@media only screen and (max-width: 900px){
    .container1-user{
        width: 90%;
    }
}

@media only screen and (max-width: 765px){
    .container1-user{
        width: 100%;
    }
}

@media only screen and (max-width: 650px){
    .flex-container-user {
        width: 90%;
        margin: auto;
    }
    .imgcontainer{
        display: none;
    }
    .container-user{
        width: 100%;
    }
}

.form-submit-user{
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

.form-submit-user:hover{
    background: #fff;
    color: #6dabe4;
}
</style>