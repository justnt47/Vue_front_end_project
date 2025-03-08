import { onMounted } from "vue";
import { createRouter, createWebHistory, useRouter } from 'vue-router';
import Login from '../page/Login/page.vue';
import HomePage from '../page/Home/page.vue';
import ProductPage from '../page/Product/page.vue';
import MainLayout from "../MainLayout.vue";

const routes = [
  // {
  //   path: '/',
  //   redirect: { name: 'HelloWorld' } // Redirect to the "Home" page by default
  // },
  // { 
  //   path: '/login',
  //   name:'Login',
  //   component: Login 
  // },
  // { 
  //   path: '/',
  //   name:'HelloWorld',
  //   component: HelloWorld 
  // },
  {
    path: "/",
    component: MainLayout, // Main layout for all routes except login
    redirect: "/",
    children: [
      { 
        path: '/',
        name:'HomePage',
        component: HomePage 
      },
      { 
        path: '/Products',
        name:'ProductPage',
        component: ProductPage 
      },
      
    ]
  },
  { 
    path: '/login',
    name:'Login',
    component: Login 
  },


];


const router = createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes
})
export default router