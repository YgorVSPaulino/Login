import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import axios from 'axios'
import router from './router'

createApp(App).mount('#app').use(axios).use(router)
