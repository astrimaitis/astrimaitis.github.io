import Vue from 'vue'
import VueRouter from 'vue-router'
import ProductsPage from '../views/ProductPage.vue'
import ProductDetailPage from '../views/ProductDetailPage.vue' 
import CartPage from '../views/CartPage.vue'



Vue.use(VueRouter)

const routes = [

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/products',
        name: 'Products',
        component: ProductsPage,
    },
    {
        path: '/products/:id',
        name: 'ProductDetail',
        component: ProductDetailPage,
    },
    {
        path: '/cart',
        name: 'Cart',
        component: CartPage,
    },
    {
        path: '/',
        redirect: '/products',
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
