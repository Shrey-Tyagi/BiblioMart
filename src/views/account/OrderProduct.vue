<template>
  <div>
    <h2> LIST OF PRODUCTS </h2>
    <div class="order-card-page">
      <div class="order-card" v-for="order in getOrderProduct" :key="order.productId+' '+order.merchantId">
        <div>
          <h3>   {{ order.productName }} </h3>
        </div>
        <div>
          <h3> Quantity : {{ order.quantity }} </h3>
        </div>
        <div>
          <h3> Price : {{ order.cost }} </h3>
        </div>
      </div>
      <h3> Total Price : {{ getPrice() }} </h3>
    <div>
      <router-link to="/">
        <button class="button form-submit-user"> Home </button>
      </router-link>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderProduct',
  computed : {
      getOrderProduct(){
          return this.$store.state.orderProduct;
      }
  },
  methods:{
      getPrice(){
          let price = 0;
          for(let i=0;i<this.getOrderProduct.length;i++){
              price += (this.getOrderProduct[i].cost)*(this.getOrderProduct[i].quantity);
          }
          return price;
      }
  }
}
</script>

<style scoped>

.order-card-page{
  width: 70%;
  margin: auto;
}

.order-card{
  display: flex;
  justify-content: space-around;
  background-color:#F5F5F5;
  margin: 10px 0;
  padding: 20px;
}

.button {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}

.button:hover {
  background-color:white; /* Green */
  border: 1px solid  #4CAF50;
  color:  #4CAF50;
}

</style>
