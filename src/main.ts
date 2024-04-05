import { createApp } from 'vue'
import App from './App.vue'
import { setupRouter } from './router'
import Particles from '@tsparticles/vue3'
import { loadSlim } from '@tsparticles/slim'
import '@/assets/styles/index.scss'

const setupAll = () => {
  const app = createApp(App)

  setupRouter(app)

  app.use(Particles, {
    init: async (engine) => {
      await loadSlim(engine)
    },
  })

  app.mount('#app')
}

setupAll()
