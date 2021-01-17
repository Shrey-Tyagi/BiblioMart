<template>
  <div>
      <h2>Update Product</h2>
      <section>
              <form @submit.prevent="onSubmit">
                <div class="form-group">
                    <fieldset id="categoryName">
                        <legend>Category Names</legend>
                        <p>
                            <label>Select Category  </label>
                            <select name = "category"  id = "myList" v-model="productName" required>
                            <option v-for="product in getData" :key="product.productName" :value = "product.productName" >{{product.productName}}</option>
                            </select>
                        </p>
                    </fieldset>
                </div>
                <div class="form-group">
                    <label for="price">Quantity</label>
                    <input type="number" class="form-control" min="0" id="quantity" placeholder="Enter Quantity" v-model = "quantity" required>
                </div>
                <div class="form-group">
                    <label for="price">Price in INR</label>
                    <input type="number" class="form-control" min="0" id="price" placeholder="Enter Price" v-model = "cost" required>
                </div>
                <button class="btn btn-primary">Update product</button>
            </form>
      </section>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name:"MerchantUpdateProduct",
    data(){
        return{
            productName : "",
            cost:"",
            quantity : "",
        }
    },
    methods:{
        onSubmit(){
            //TODO {methodId,productName,cost,quantity} send 
            let data = {
                merchantId : this.$store.state.Id,
                productName : this.productName,
                cost: this.cost,
                quantity : this.quantity
            }
            console.log(data);
            axios.post('http://localhost:8083/merchant/updateByMerchant',data)
                .then( (response) => {
                    console.log(response);
                    this.$store.state.productList = response.data.productDetails;
                })
                .catch(function (error) {
                    console.log(error);
                });
                this.$router.push({name:'MerchantProduct'})

        }
    },
    computed:{
        getData(){
            return this.$store.state.productList;
        }
    }
}
</script>

<style>

</style>