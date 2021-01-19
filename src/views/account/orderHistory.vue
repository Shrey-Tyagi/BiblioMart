<template>
  <div class="hello">
    <h2> ORDER HISTORY </h2>
    <div class="order-card-page">
      <div class="order-card" v-for="order in getOrderList" :key="order.orderId">
        <div>
          <h3> Date : {{ order.date }} </h3>
        </div>
        <div>
          <h3> Time : {{ order.time }} </h3>
        </div>
        <div>
          <button @click="ordersOfProduct(order.orderId)" class="view-item"> VIEW ORDERS </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'OrderHistory',
  computed:{
    getOrderList(){
      let orderList = [];
      let orders = this.$store.state.orderHistory;
      for(let i =0;i<orders.length;i++){
        let order = {};
        order["orderId"] = orders[i].orderId;
        let timeStamp = orders[i].timestamp;
        timeStamp = timeStamp.split(' ');
        order["date"] = timeStamp[0];
        let time = timeStamp[1].split('.');
        order["time"] = time[0];
        orderList.push(order);
      }
    return orderList;
    }
  },
  methods:{
    ordersOfProduct(orderId){
    console.log(orderId);
    let urlPro = this.$store.state.order+"/order/getorder/" +orderId;
    axios.get(urlPro)
            .then((response)=>{
                console.log(response);
                this.saveInOrder(response);
                console(this.$store.state.orderProduct)
            });  
      // TODO call this url -> order/getorder/{orderId}
      // TODO recieve products List
    },
    saveInOrder(response){
      this.$store.state.orderProduct = response.data;
      return response.data;
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

</style>