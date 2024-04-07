import { createApp } from 'vue'
import App from './App.vue'
import { setupRouter } from './router'
import Particles from '@tsparticles/vue3'
import { loadSlim } from '@tsparticles/slim'
import { util } from '@/plugins/index.ts'
import '@/assets/styles/index.scss'

const setupAll = () => {
  const app = createApp(App)

  setupRouter(app)
  app.use(Particles, {
    init: async (engine) => {
      await loadSlim(engine)
    },
  })
  app.use(util)

  app.mount('#app')
}

setupAll()
