<template>
<div>
    <h2> Products of Merchant </h2>
    <div v-for="product in getData" :key="product.productName" class="container-productList" >
        <div class="card-product">
            <div class="form-card">
                <img :src="product.imageUrl" alt="No Img" width="90%">
            </div>
            <div class="form-card">
                <p><b>Product Name :</b> {{ product.productName }}</p>
            </div>
            <div class="form-card">
                <p><b>Inventory :</b> {{ product.quantity }} </p>
            </div>
            <div class="form-card">
                <p><b>Cost :</b> {{ product.cost }} </p>
            </div>
        </div> 
    </div>
    <router-link to='/updateProduct'>
    <button class="form-submit-user update"> Update Product </button>
    </router-link>
    <router-link to='/AddProduct'>
    <button class="form-submit-user"> Add Product</button>
    </router-link>
</div>
</template>
 
<script>
//import axios from 'axios'
export default {
    name:"MerchantProduct",
    data(){
        return{

        }
    },
/*    method:{
        getData(){
            axios.get('http://localhost:8083/merchant/view/',1)
            .then(function (response) {
                console.log(response);
            }

            
            ); return undefined;
        }
    }*/
    computed:{
        getData(){
            return this.$store.state.productList;
        }
    }

}
</script>

<style scoped>
*{
    box-sizing: border-box;
    font-size: 13px;
    line-height: 1.8;
    color: #222;
    font-weight: 400;
    font-family: Monospace;

}

.update{
    margin-right: 50px;
}

h2{
    line-height: 1.66;
    margin: 0;
    padding: 0;
    font-weight: bold;
    color: #222;
    font-size: 36px;
    margin-bottom: 30px;
    text-align: center;
}

.card-product {
    width: 70%;
    background: #f8f8f8;
    padding: 8px;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 10px;
    margin:auto ;
    display: flex;
    justify-content: space-around;
  }

.container-productList{
    margin: 10px 0 ;
}

.form-card{
    width: 20%;
}

  p{
      font-size: 16px;
  }
</style>