<template>
  <div class="hello">
    <div class="product-list-flex">
      <div class="each-product-flex" v-for="mainProductList in mainProductList" :key="mainProductList.productId">
          <img alt="Vue logo" src="https://www.w3schools.com/css/pineapple.jpg" width = "60%">
        <h3>{{ mainProductList.catName }}</h3>
        <button class="product-button" @click="getSingleProduct(mainProductList.productId)" >{{ mainProductList.productName }}</button>
        </div>
    </div>
  </div>
</template>

<script>
import axios from'axios'
export default {
  name: 'ProductView',
  computed:{
    mainProductList(){
      return this.$store.state.mainProductList;
    }
  },
  methods:{
    getSingleProduct(productId){
      this.$store.state.productId=productId
      let PId=this.$store.state.productId
      let productUrl='http://localhost:8085/myproduct/'+PId
          axios.get(productUrl)
          .then((response)=>{
              console.log(response);
              this.saveInSingleProd(response);
          });
          this.$router.push({name:'productCard'}); 
            
      },
      saveInSingleProd(response){
      this.$store.state.singleProduct = response.data;
      // return response.data;
      console.log(this.$store.state.singleProduct);
      },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.product-list-flex{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.each-product-flex{
  width: 30%;
  margin-bottom: 20px;
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

</style>
