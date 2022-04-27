import { createApp } from 'vue'
import App from './App.vue'

// Login
import Login from '/src/View/Login.vue'





const app = createApp(App)

app.component('Login', Login)

app.mount('#app')
