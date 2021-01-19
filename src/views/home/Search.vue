<template>
  <div>
    <form class="example" action="/action_page.php" style="margin:auto;max-width:300px">
      <input type="text" placeholder="Search.." v-model = "search" name="search2">
      <button type="submit" @click.prevent="searchProduct()"><i class="fa fa-search"></i></button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'Search',
  data(){
    return{
      search : ""
    }
  },
  methods:{
    searchProduct(){
      console.log(this.search);
      let urlSearch = "http://localhost:8085/searchproduct/custom/"+this.search;
      axios.get(urlSearch)
            .then((response)=>{
                console.log(response);
                this.saveInSearch(response);
            });
            // this.$router.push({name:''}); 
     },
      saveInSearch(response){
      this.$store.state.productList = response.data;
      // return response.data;
      console.log(this.$store.state.productList);
      },

      // TODO send it to search "searchproduct/custom/{text}" (GET request);
      // TODO you get all the  products and store in store
    }
  }
}
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');
* {
  box-sizing: border-box;
}

form.example input[type=text] {
  padding: 10px;
  font-size: 17px;
  border: 1px solid grey;
  float: left;
  width: 80%;
  background: #f1f1f1;
}

form.example button {
  float: left;
  width: 20%;
  padding: 10px;
  background: #2196F3;
  color: white;
  font-size: 17px;
  border: 1px solid grey;
  border-left: none;
  cursor: pointer;
}

form.example button:hover {
  background: #0b7dda;
}

form.example::after {
  content: "";
  clear: both;
  display: table;
}
</style>