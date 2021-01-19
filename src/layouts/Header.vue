<template>
          <nav class="main-flex" v-if="$store.state.Id != -1">
        <div class="tag-flex"> <h2> BiblioMart </h2> </div>
      <div class="flex-class-nav">
        <div class="child-flex-class-nav">
          <Search/>
        </div>
        <div class="child-flex-class-nav">
          <form @submit.prevent="getUser">
          <button> {{ this.$store.state.userName }} </button>
          </form>
        </div>
        <div class="child-flex-class-nav">
          <form @submit.prevent="getCart">
              <button type="submit" class="btn btn-primary my-2 my-sm-0">
                  <img
                    src="https://pngimg.com/uploads/shopping_cart/shopping_cart_PNG38.png"
                    width="50"
                    alt
                  />
            </button>
          </form>
        </div>
      </div>
      </nav>
      <nav v-else class="main-flex">
        <div class="tag-flex"> <h2> BiblioMart </h2> </div>
      <div class="flex-class-nav">
        <div class="child-flex-class-nav">
          <Search/>
        </div>
        <div class="child-flex-class-nav">
          <router-link to="/register">
            <button> Register </button>
          </router-link>
        </div>
        <div class="child-flex-class-nav">
         <router-link to="/login">
            <button> Login </button>
         </router-link>
         </div>
        <div class="child-flex-class-nav">
          <form @submit.prevent="getCart">
              <button type="submit" class="btn btn-primary my-2 my-sm-0">
                  <img
                    src="https://pngimg.com/uploads/shopping_cart/shopping_cart_PNG38.png"
                    width="50"
                    alt
                  />
            </button>
          </form>
        </div>
      </div>
      </nav>
</template>
<script>
import Search from '../views/home/Search.vue';
export default {
    components: { ProductsView, Search },
    name:"Header"
}
</script>

<style scoped>
nav {
  background-color: teal;
}
.navbar-brand {
  font-weight: bold;
  font-size: 25px;
  color: #ffffff !important;
}
.profile-image {
  width: 50px;
  border-radius: 100% !important;
}
.page-container {
  padding-top: 81px;
}
.btn {
  border-radius: 0%;
  font-weight: bold;
  background: teal;
  border: teal;
}
.btn:hover {
  background: #00b4b4;
}
input {
  border-radius: 0%;
}
.btn:focus {
  background: teal;
}

.flex-class-nav{
  align-content: center;
  display: flex;
  justify-content: flex-end;
}

.child-flex-class-nav{
  margin-right: 60px ;
  align-self: center;
}

.main-flex{
  display: flex;
  justify-content: space-between;
  align-content: center;
}

.tag-flex{
  align-self: center;
  margin-left: 50px;
  color: palevioletred;
  align-self: center;
}

</style>