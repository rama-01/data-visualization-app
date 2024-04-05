import { createApp } from 'vue'
import App from './App.vue'
import { setupRouter } from './router'
import VueParticles from 'vue-particles'
import '@/assets/styles/index.scss'

const setupAll = () => {
  const app = createApp(App)

  setupRouter(app)

  app.component('VueParticles', VueParticles)

  app.mount('#app')
}

setupAll()
