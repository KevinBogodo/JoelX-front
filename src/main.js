import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

// Aside
import Aside from '/src/components/Aside/Aside.vue'
import Header from '/src/components/Aside/Header.vue'
import Menu from '/src/components/Aside/Menu.vue'

// Main
import Main from '/src/components/Main/Main.vue'
import AddC from '/src/components/Main/AddC.vue'
import MainList from '/src/components/Main/MainList.vue'
import CardBill from '/src/components/Main/CardBill.vue'
import Bill from '/src/components/Main/Bill.vue'
import SearchC from '/src/components/Main/SearchC.vue'
import CardServices from '/src/components/Main/CardServices.vue'


// Login
import Login from '/src/View/Login.vue'





const app = createApp(App)

app.component('Login', Login)

app.component('Aside', Aside)
app.component('Header', Header)
app.component('Menu', Menu)

app.component('Main', Main)
app.component('Bill', Bill)
app.component('AddC', AddC)
app.component('SearchC', SearchC)
app.component('MainList', MainList)
app.component('CardBill', CardBill)
app.component('CardServices', CardServices)

app.use(router)
app.mount('#app')
