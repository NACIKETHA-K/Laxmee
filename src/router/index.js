import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AccesoriesDetail from '../views/AccesoriesDetail.vue'

const routes = [

  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/Cart', 
    name: 'Cart',
    component: () => import('../views/Cart.vue')
  },
  {
  path: '/payment/:id',
  name: 'payment',
  component: () => import('../views/PaymentPage.vue') 
},
  {
  path: '/productdetail/:id',
  name: 'productdetail',
  component: () => import('../views/ProductDetail.vue') 
},{
  path: '/cart-payment',
  name: 'cart-payment',
  component: () => import('../views/CartPayment.vue')
},
{
  path:'/ProductWomen',
  name:'ProductWomen',
  component: () => import('../views/ProductWomen.vue')
},
{
  path:'/ProductShoes',
  name:'ProductShoes',
  component: () => import('../views/ProductShoes.vue')
},
{
    path: '/shoedetail/:id',
    name: 'shoedetail',
    component: () => import('../views/ShoeDetail.vue'),
  },
  {
    path: '/payment-success',
    name: 'payment-success',
    component: () => import('../views/PaymentPage.vue')
  },
  {
    path:'/accessories',
    name:'',
    component: () => import('../views/Accessories.vue')

  },
  {
  path: '/AccesoriesDetail/:id',
  name: 'AccesoriesDetail',
  component:AccesoriesDetail
}



]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
