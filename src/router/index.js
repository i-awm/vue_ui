import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children:[
      {
        path:'index/:types',
        
      }
    ]
  },{
    path:'/detail/:tid',
    name:'Detail',
    props:true,
    component:() => import('@/views/Detail/index.vue')
  },
  {
    path:'/login',
    name:'Login',
    component:() => import('@/views/User/Login.vue')
  },
  {
    path:'/user',
    name:'User',
    component:() => import('@/views/User/user.vue')
  },
  {
    path:'/hot',
    name:'Hot',
    component:() => import('@/views/Hot/index.vue')
  },
  {
    path:'/msg',
    name:'Msg',
    component:() => import('@/views/Message/index.vue')
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
