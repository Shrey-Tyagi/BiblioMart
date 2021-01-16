<template>
<div>
    <h2> Products of Login </h2>
    <div v-for="product in product_list" :key="product.Name+product.Count" class="container-productList" >
        <div class="card-product">
            <div class="form-card">
                <p><b>Product Name :</b> {{ product.Name }}</p>
            </div>
            <div class="form-card">
                <p><b>Inventory :</b> {{ product.Count }} </p>
            </div>
            <div class="form-card">
                <p><b>Cost :</b> {{ product.Cost }} </p>
            </div>
            <div class="form-card">
            <button class="form-submit-user"> Update</button>
            </div>
        </div> 
    </div>
    <router-link to='/AddProduct'>
    <button class="form-submit-user"> Add Product</button>
    </router-link>
</div>
</template>
 
<script>
export default {
    name:"MerchantProduct",
    data(){
        return{
            product_list:[
                {
                    Name: "Car",
                    Count: "10",
                    Cost: "1000"
                },
                {
                    Name: "Cajshbxr",
                    Count: "10",
                    Cost: "1000"
                },
            ]
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

  p{
      font-size: 16px;
  }
</style>