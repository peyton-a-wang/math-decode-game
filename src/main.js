import { createApp } from 'vue'
import App from './App.vue'
import { plugin, defaultConfig } from '@formkit/vue'
import router from './router'
import '@formkit/themes/genesis'

import './assets/main.css'

const app = createApp(App)
app.use(plugin, defaultConfig)
app.use(router)
app.mount('#app')
