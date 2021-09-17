import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
// import App from '../App.vue'
// import Product from '../views/Product.vue'
import Login from '../views/Login.vue'
import CartView from '../views/CartView.vue'
import Shop from '../views/Shop.vue'
import Account from '../views/Account.vue'
import ProductDetails from '../views/ProductDetails.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/product',
  //   name: Product,
  //   component: Product,
  //   props(route) {
  //     return {  myprop: route.query.myprop }
  //   }
  // },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },

  {
    path: '/cart',
    name: 'CartView',
    component: CartView
  },

  {
    path: '/productDetails',
    name: 'ProductDetails',
    component: ProductDetails,
    props(route) {
      return {  productId: route.query.productId }
    }
  },
 
  {
    path: '/shop',
    name: 'Shop',
    component: Shop,
  },

  {
    path: '/account',
    name: 'Account',
    component: Account,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
