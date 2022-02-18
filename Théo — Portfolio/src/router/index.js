import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Théo - Portfolio',
      metaTags: [
        {
          name: 'description',
          content: 'I am Product Design student @lecolededesign with attention on habits, feelings and crafting the futur of technology. My focus is in product and service.'
        },
        {
          property: 'og:description',
          content: 'I am Product Design student @lecolededesign with attention on habits, feelings and crafting the futur of technology. My focus is in product and service.'
        }
      ]
    },
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
