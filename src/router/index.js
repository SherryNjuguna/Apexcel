import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

import Contact from '../views/Contact.vue'
import About from '../views/About.vue'
import Programs from '../views/Programs.vue'


const routes = [
  { path: '/', 
    component: Home, },

  {
    path: '/contact',
    component:Contact,
    }, 
    {
        path: '/about',
        component:About,
        }, 
        {
            path: '/programs',
            component:Programs,
            }, 
           


  // Add more routes here as needed
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
