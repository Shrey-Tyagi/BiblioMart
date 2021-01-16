<template>
    <form>
    <div class="form-group">
        <fieldset id="categoryName">
            <legend>Category Names</legend>
            <p>
                <label>Select Category  </label>
                <select id = "myList">
                <option value = "Biography">Biography</option>
                <option value = "Self Help">Self Help</option>
                <option value = "Comics">Comics</option>
                <option value = "Fiction">Fiction</option>
                <option value = "Non Fiction">Non Fiction</option>
                </select>
            </p>
        </fieldset>
      <label for="productName">Product name</label>
      <input type="text" class="form-control" id="productName" maxlength="32" placeholder="Enter product name">
    </div>
    <div class="form-group">
      <label for="productDescription">Product description <small class="text-muted">(optional)</small></label>
      <textarea class="form-control"  id="productDescription" rows="3" maxlength="128" placeholder="Enter description"></textarea>
    </div>
    <div class="form-group">
      <label for="price">Price in INR</label>
      <input type="number" class="form-control" id="price" placeholder="Enter Price" number>
    </div>
    <button type="submit" v-on:click.prevent="onSubmit" class="btn btn-primary">Save product</button>
  </form>
</template>



<script>
export default {
    name:  "AddProduct",
// https://jayway.github.io/vue-js-workshop/docs/add-products.html   and add attributes 
//   props: ['product'],
  methods: {
    onSubmit () {
    //   this.$emit('submit', this.product)
    }
  }
}
</script>

<style scoped>

</style>


