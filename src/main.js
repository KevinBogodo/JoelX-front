import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

// Aside
import Aside from '/src/components/Aside/Aside.vue'
import Header from '/src/components/Aside/Header.vue'
import Menu from '/src/components/Aside/Menu.vue'

// Main
import Main from '/src/components/Main/Main.vue'
import MainList from '/src/components/Main/MainList.vue'
import CardServices from '/src/components/Main/CardServices.vue'


// Login
import Login from '/src/View/Login.vue'





const app = createApp(App)

app.component('Login', Login)

app.component('Aside', Aside)
app.component('Header', Header)
app.component('Menu', Menu)

app.component('Main', Main)
app.component('MainList', MainList)
app.component('CardServices', CardServices)

app.use(router)
app.mount('#app')
