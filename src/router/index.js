import Vue from 'vue'
import VueRouter from 'vue-router'
import FirstPageView from '../views/firstPageView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'firstPage',
    component: FirstPageView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
