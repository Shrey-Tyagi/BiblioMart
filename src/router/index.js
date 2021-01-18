import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../layouts/Base.vue'),
    children: [ 
      { path: '', name: "product", component: () => import('../views/home/Products.vue') },
      { path: 'details/:idProduct', component: () => import('../views/home/Details.vue') }
    ],
  },
  {
    path: '/cart',
    component: () => import('../views/home/Cart.vue')
  },
  {
    path: '/login',
    component: () => import('../views/account/Login.vue')
  },
  {
    path: '/register',
    component: () => import('../views/account/Register.vue')
  },
  {
    path: '/merchantRegister',
    component:() => import('../views/account/MerchantRegister.vue')
  },
  {
    path: '/user',
    component:() => import('../views/account/user.vue')
  },
  {
    path: '/userhistory',
    component:() => import('../views/account/userhistory.vue')
  },
  {
    path: '/MerchantProduct',
    name: "MerchantProduct",
    component:() => import('../views/account/MerchantProduct.vue')
  },
  {
    path: '/AddProduct',
    component:() => import('../views/account/AddProduct.vue')
  },
  {
    path: '/updateProduct',
    component:() => import('../views/account/MerchantUpdateProduct.vue')
  },
  {
    path: '/updateuser',
    component:() => import('../views/account/UpdateUser.vue')
  },
  {
    path: '/productCard',
    name: 'productCard',
    component:() => import('../views/home/Details.vue')
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router