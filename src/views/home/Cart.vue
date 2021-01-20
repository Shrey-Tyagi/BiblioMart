<template>
  <div>
    <h2>CART</h2>
    <div class="cart-card-page">
      <div class="cart-card" v-for="cart in getCart" :key="cart.productId+''+cart.merchantId">
        <div>
          <h3>{{ cart.productName }}</h3>
        </div>
        <div>
          <h3>Quantity : {{ cart.quantity }}</h3>
        </div>
        <div>
          <h3>Cost : {{ cart.cost }}</h3>
        </div>
        <div>
          <button @click="viewItemInCart(cart.productId)" class="view-item button-border-radius"> VIEW ITEM </button>
        </div>
        <div>
          <button @click="deleteItemFromCart(cart.productId,cart.merchantId)" class="delete-item button-border-radius"> DELETE ITEM </button>
        </div>
      </div>
    </div>
    <h3> Total Cost : {{ totalCost() }} </h3>
    <router-link to='/'>
      <button class="view-item button-border-radius"> Home </button>
    </router-link>
    <button @click="checkout()" class="view-item button-border-radius"> CHECK OUT </button>
    

  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  computed:{
    getCart(){
      return this.$store.state.userCart;
    }
  },
  methods:{
  totalCost(){
    let cost = 0;
      for(let i =0;i<this.getCart.length;i++){
        cost += parseInt(this.getCart[i].cost)*parseInt(this.getCart[i].quantity);
      }
      return cost;
    },
  deleteItemFromCart(productId,merchantId){
    console.log(productId,merchantId);
    let delUrl=this.$store.state.cart+"/cart/delproduct/"+this.$store.state.Id+'/'+productId+'/'+merchantId;
      axios.delete(delUrl)
                .then( (response) => {
                    console.log(response);
                    this.getCartUpdate();
                })
                .catch(function (error) {
                    console.log(error);
                });
                
                
    // TODO SEND userid,productId,merchantId
    // TODO update the store of cart
  },
  viewItemInCart(productId){
    console.log(productId);
    this.$store.state.id=productId;
    this.$router.push({name:"productCard"});  
    // TODO SEND productId
  },
  getCartUpdate(){
      let urlcart = this.$store.state.cart+'/cart/getcart/'+this.$store.state.Id
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
  checkout(){
    if(this.$store.state.Id == -1){
      this.$router.push({path:"/login"});
    }
    else{
    
      console.log("checkout*******************************");
      let urlorder=this.$store.state.order+"/order/orderadd/"+this.$store.state.Id+"/"+this.$store.state.userDetails.email;

      console.log("****************Email")
      console.log(this.$store.state.userDetails.email)
      let urlDel=this.$store.state.cart+"/cart/cartdel/"+this.$store.state.Id;
      console.log(urlorder);
      console.log(this.$store.state.userCart)
      axios.post(urlorder,this.$store.state.userCart)
      axios.delete(urlDel)
                  .then( (response) => {
                      console.log(response);
                      this.getCartUpdate();
                  })    
                  .catch(function (error) {
                      console.log(error);
                  });
      alert("Your order is placed! Be on the lookout for our executive ;)");
                  
      // TODO SEND productId
      // TODO empty the store of cart
    }
  }
  },
}
</script>


<style scoped>

.cart-card-page{
  width: 70%;
  margin: auto;
}

.cart-card{
  display: flex;
  justify-content: space-around;
  background-color:#F5F5F5;
  margin: 10px 0;
  padding: 20px;
}

.view-item{
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;

}

.view-item:hover{
  color: #4CAF50;
  border: 1px solid #4CAF50;
  background-color: white;
} 

.delete-item{
  background-color: #008CBA;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
.button-border-radius{
  border-radius:8px;
  margin-bottom: 10px;
}
.delete-item:hover{
  color: #008CBA;
  border: 1px solid #008CBA;
  background-color: white;
} 


</style>