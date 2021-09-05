import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {
        default: () => import(/* webpackChunkName: "Home" */ '@/views/Home/Home.vue'),
        content: () => import(/* webpackChunkName: "Home content" */ '@/views/Home/Content.vue')
      }
    }, {
      path: '/about',
      name: 'About',
      components: {
        default: () => import(/* webpackChunkName: "About" */ '@/views/About/About.vue'),
        content: () => import(/* webpackChunkName: "About content" */ '@/views/About/Content.vue')
      }
    }, {
      path: '/contact',
      name: 'Contact',
      components: {
        default: () => import(/* webpackChunkName: "Contact" */ '@/views/Contact/Contact.vue'),
        content: () => import(/* webpackChunkName: "Contact content" */ '@/views/Contact/Content.vue')
      }
    }
  ]
})

export default router
