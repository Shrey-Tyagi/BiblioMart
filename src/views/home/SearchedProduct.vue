<template>
  <div>
    <div class="flex-container-search-bar">
      <br>
      <h2> Search Results : </h2>
        <div class="flex-container-search" v-for="productList in searchedProductsList" :key="productList.productId" @click="product(productList.productId)">
            <div class="flex-child-container-search search-image"> <img src="https://www.w3schools.com/css/paris.jpg" alt="Img" width="40%"> </div>
            <div class="flex-child-container-search"> Product : {{ productList.productName }} </div>
            <div class="flex-child-container-search"> Category : {{ productList.catName }} </div>
            <div class="flex-child-container-search"> Price : Rs. {{ productList.merchantDetailsList[0].cost }} </div>
        </div>
      </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SearchedProduct",
  computed:{
    searchedProductsList(){
      return this.$store.state.searchedProducts;
    }
  },
  methods:{
    product(productId){
      console.log(productId);
      this.$store.state.productId=productId;
      let productUrl='http://10.177.1.69:8089/myproduct/'+productId
          axios.get(productUrl)
          .then((response)=>{
              console.log(response);
              this.saveInSingleProd(response);
          });
          this.$router.push({name:'productCard'}); 
            
      },
      saveInSingleProd(response){
      this.$store.state.singleProduct = response.data;
      console.log(this.$store.state.singleProduct);
      },
      // TODO send the productId and get route to product page
    }
}
</script>

<style>

.flex-container-search{
  display: flex;
  justify-content: space-around;
  align-content: center;
  flex-wrap:wrap;
  margin: 1%;
  background-color: #F5F5F5;
  border-radius: 25px;
  cursor:pointer;
}

.flex-child-container-search{
  font-size:20px;
  width: 20%;
  align-self: center;
}
.search-image{
  padding: 1%;
}
.flex-container-search-bar{
  width: 85%;
  margin: auto;
}

</style>