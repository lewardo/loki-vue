import { createApp } from 'vue'

import anime from 'animejs/lib/anime.es'

import router from '@/router'
import app from '@/App.vue'

const creation = createApp(app)

creation.config.globalProperties = {
  ...creation.config.globalProperties,
  anime: anime,
  animparam: {
    duration: 1000,
    easing: 'cubicBezier(0, 0.85, 0.5, 1)'
  }
}

creation
  .use(router)
  .mount('#app')
