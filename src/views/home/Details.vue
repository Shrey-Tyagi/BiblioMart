<template>
  <section class="body-container-product">
      <div class ="main-container-flex">
        <div class ="child-container-flex">
          <h2>{{product.productName}}</h2>
          <img alt="Vue logo" :src="product.imageUrl" width = "60%">
          <p class = "hello-none"> {{getData()}} </p>
        </div>
        <div class ="child-container-flex child-description">
          <h2> Description </h2>
          <p>{{product.productDescription}}</p>
        </div>
        <div class ="child-container-flex">
          <h3>About Product</h3>
          <p> Product : {{product.productName}} </p>
          <p> Category : {{ product.catName }} </p>
          <p> Language : {{ product.productDetails.language }} </p>
          <p> Author : {{ product.productDetails.author }} </p>
          <p> Publisher : {{ product.productDetails.publisher }} </p>
          <p> Edition : {{ product.productDetails.edition }} </p>
        </div>
        <div class ="child-container-flex merchant-flex">
            Quantity : <input type="number" minval=1 v-model="quantity"><br><br>
            Select Merchant and Cost :
            <select name="merchant" v-model="merchantDetails">
              <option v-for="merchant in product.merchantDetailsList" :key="merchant.merchantId" :value="merchant.merchantId + ' ' + merchant.quantity + ' ' + merchant.cost ">
                Quantity Avalible : {{ merchant.quantity }} - Rs. {{ merchant.cost }}
              </option>
            </select>
            <br><br>
            Price : Rs. 
            <span v-if="quantity > 0">{{price*quantity }}</span>
            <span v-else>0</span>
          <form @submit.prevent="addToCart">
            <br><button class="product-button button-border-radius"> Add to Cart </button>
          </form>
          <form @submit.prevent="getCartUpdate">
            <br><button class="product-button button-border-radius"> Go to Cart </button>
          </form>
        </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: 'Details',
  data(){
    return{
      merchantDetails:"",
      quantity:1,
      merchantId:-1,
      price : -1,
      quantity_avaliable : -1,
    }
  },
  methods:{
    getData(){
      if(this.merchantId == -1){
        this.merchantId = this.$store.state.singleProduct.merchantDetailsList[0].merchantId;
        this.price = this.$store.state.singleProduct.merchantDetailsList[0].cost;
        this.quantity_avaliable = this.$store.state.singleProduct.merchantDetailsList[0].quantity;
        this.merchantDetails = this.merchantId + " " + this.quantity_avaliable + " " + this.price;
      }
      else{
        let merDetails = this.merchantDetails.split(" ");
        this.merchantId = parseInt(merDetails[0]);
        this.quantity_avaliable = parseInt(merDetails[1]);
        this.price = parseInt(merDetails[2]);
      }
    },
    addToCart(){
      this.quantity = parseInt(this.quantity);
      if(this.quantity < 0) alert("Quantity should be greater than 1");
      else if(this.quantity_avaliable < this.quantity) alert("Quantity should be less the avaliable quantity");
      else{
        let addToCartdata = {
          "userId": this.$store.state.Id,
          "productId" :this.product.productId,
          "productName" :this.product.productName,
          "quantity":this.quantity,
          "merchantId":this.merchantId,
          "cost":this.price
        }
        console.log(addToCartdata);
        if(this.$store.state.guestUserId == -1 && this.$store.state.Id == -1){
          this.$store.state.guestUserId = parseInt(new Date().getTime()/100000);
          addToCartdata.userId=this.$store.state.guestUserId
          console.log(addToCartdata.userId);
        }
        if(this.$store.state.Id == -1){
          addToCartdata.userId=this.$store.state.guestUserId
          }
        console.log("******************** guestuserID")
        console.log(addToCartdata)


        /////
        // this.$store.state.userCart.push(addToCartdata);
        /////
        axios.post(this.$store.state.cart+'/cart/cartadd',addToCartdata)
                .then( (response) => {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
                // this.$router.push({name:'MerchantProduct'})

      }
    },
    getCartUpdate(){
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
      }
  },
  computed:{
    product(){
        let product = this.$store.state.singleProduct;
        return product;
    },
  }

}
</script>

<style scoped>

.main-container-flex{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

}

.child-container-flex{
  width: 40%;
}

.child-description{
  align-self: center;
}

.body-container-product{
  width: 80%;
  margin: auto;
  background-color:#F5F5F5 ;
}

.merchant-flex{
  font-size: 20px;
}
.hello-none{
  display: none;
}

.product-button{
  background-color: #4CAF50;
  border: 1px solid white;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
.product-button:hover{
  background-color: white;
    border: 1px solid #4CAF50;
  color: #4CAF50;
}
.button-border-radius{
  border-radius:8px;
  margin-bottom: 10px;
}

</style>