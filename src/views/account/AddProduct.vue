<template>
    <form @submit.prevent="onSubmit">
    <div class="form-group">
        <fieldset id="categoryName">
            <legend>Category Names</legend>
            <p>
                <label>Select Category  </label>
                <select name = "category"  id = "myList" v-model="category" required>
                <option value = "Biography">Biography</option>
                <option value = "Self Help">Self Help</option>
                <option value = "Comics">Comics</option>
                <option value = "Fiction">Fiction</option>
                <option value = "Educational">Educational</option>
                </select>
            </p>
        </fieldset>
    </div>
    <div class="form-group">
      <label for="productName">Product name</label>
      <input type="text" class="form-control" id="productName" maxlength="32" placeholder="Enter product name" v-model = "productName" required>
    </div>
    <div class="form-group">
      <label for="productDescription">Product description</label>
      <textarea class="form-control"  id="productDescription" rows="3" maxlength="128" placeholder="Enter description" v-model = "productDescription" required></textarea>
    </div>
    <div class="form-group">
      <label for="price">Quantity</label>
      <input type="number" class="form-control" min="0" id="quantity" placeholder="Enter Quantity" v-model = "quantity" required>
    </div>
    <div class="form-group">
      <label for="price">Price in INR</label>
      <input type="number" class="form-control" min="0" id="price" placeholder="Enter Price" v-model = "price" required>
    </div>
    <div class="form-group">
      <label for="language">Language</label>
      <input type="text" class="form-control" id="language" maxlength="32" placeholder="Language of the book" v-model = "language" required>
    </div>
    <div class="form-group">
      <label for="publisher">Publisher</label>
      <input type="text" class="form-control" id="publisher" maxlength="32" placeholder="Publisher of the book" v-model = "publisher" required>
    </div>
    <div class="form-group">
      <label for="author">Author</label>
      <input type="text" class="form-control" id="author" maxlength="32" placeholder="Author of the book" v-model = "author" required>
    </div>
    <div class="form-group">
      <label for="edition">Edition</label>
      <input type="text" class="form-control" id="edition" maxlength="32" placeholder="Edition of the book" v-model = "edition" required>
    </div>
    <button class="btn btn-primary">Save product</button>
  </form>
</template>



<script>
import axios from 'axios'
export default {
    name:  "AddProduct",
// https://jayway.github.io/vue-js-workshop/docs/add-products.html   and add attributes 
//   props: ['product'],
    data(){
        return{
            category : "",
            productName : "",
            productDescription : "",
            price : "",
            quantity : "",
            language : "",
            publisher : "",
            author : "",
            edition : "",
            productDetails : {},
        }
    },
      methods: {
        onSubmit () {
            this.productDetails = [{
                "categoryName":this.category,
                "productName":this.productName,
                "cost":parseInt(this.price),
                "quantity":parseInt(this.quantity),
                "productDescription":this.productDescription,
                "language":this.language,
                "publisher":this.publisher,
                "author":this.author,
                "edition":this.edition,
                "imageUrl":"https://www.w3schools.com/css/img_5terre.jpg"
                }];
                console.log(this.productDetails);
                // TODO Get Merchant Id from store send this object {"merchantId": temp , productDetails}
                let data = {
                              "merchantId": this.$store.state.Id,
                              "productDetails": [{
                              "categoryName":this.category,
                              "productName":this.productName,
                              "cost":parseInt(this.price),
                              "quantity":parseInt(this.quantity),
                              "productDescription":this.productDescription,
                              "language":this.language,
                              "publisher":this.publisher,
                              "author":this.author,
                              "edition":this.edition,
                              "imageUrl":"https://www.w3schools.com/css/img_5terre.jpg"
                              }]
                            }
                              
                axios.post('http://localhost:8083/merchant/addProduct',data)
                .then( (response) => {
                    console.log(response);
                    this.$store.state.productList = response.data.productDetails;
                })
                .catch(function (error) {
                    console.log(error);
                });
                
                this.$router.push({name:'MerchantProduct'})
    },


    //   this.$emit('submit', this.product)
        
    }
}
</script>

<style scoped>

</style>


