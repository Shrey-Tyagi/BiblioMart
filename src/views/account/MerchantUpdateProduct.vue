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
                            <select name = "category"  id = "myList" v-model="category" required>
                            <option v-for="product in product_list" :key="product" :value = "product">{{product}}</option>
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
                    <input type="number" class="form-control" min="0" id="price" placeholder="Enter Price" v-model = "price" required>
                </div>
                <button class="btn btn-primary">Update product</button>
            </form>
      </section>
  </div>
</template>

<script>
export default {
    name:"MerchantUpdateProduct",
    data(){
        return{
            product_list:[
                "Cars",
                "Bikes"
            ],
            productName : "",
            cost:"",
            quantity : "",
        }
    },
    methods:{
        onSubmit(){
            //TODO {methodId,productName,cost,quantity} send 
        }
    }
}
</script>

<style>

</style>