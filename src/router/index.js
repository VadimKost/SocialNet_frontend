import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About'
import User from "@/views/User";

Vue.use(VueRouter)

  const routes = [
    {
      path: '/user',
      name: 'currentuser',
      component: User
    },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about/:id',
    name: 'About',
    component: About
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
