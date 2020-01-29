import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
  path:"/",
  redirect:"/login"
},
{
  path: '/login',
  name: 'login',
  component: () => import(/* webpackChunkName: "about" */ '../views/page/login.vue')
},{
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
    children:[{
      path: '/userlist',
      name: 'userlist',
      component: () => import(/* webpackChunkName: "about" */ '../views/page/userlist.vue')
    },{
      path: '/useradd',
      name: 'useradd',
      component: () => import(/* webpackChunkName: "about" */ '../views/page/useradd.vue')
    },{
      path: '/rolelist',
      name: 'rolelist',
      component: () => import(/* webpackChunkName: "about" */ '../views/page/rolelist.vue')
    },{
      path: '/roleadd',
      name: 'roleadd',
      component: () => import(/* webpackChunkName: "about" */ '../views/page/roleadd.vue')
    },{
      path: '/setuser',
      name: 'setuser',
      component: () => import(/* webpackChunkName: "about" */ '../views/page/setuser.vue')
    }]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
