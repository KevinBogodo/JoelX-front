import { createApp } from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'

// Aside
import Aside from '/src/components/Aside/Aside.vue'
import Header from '/src/components/Aside/Header.vue'
import Menu from '/src/components/Aside/Menu.vue'

// Main
import Main from '/src/components/Main/Main.vue'
import Headers from '/src/components/Main/Header.vue'
import MainList from '/src/components/Main/MainList.vue'
import CardBill from '/src/components/Main/CardBill.vue'
import Bill from '/src/components/Main/Bill.vue'
import CardServices from '/src/components/Main/CardServices.vue'
import User from '/src/components/Main/User.vue'

// Customers
import CustomersList from '/src/components/Customers/CustomersList.vue'
import CardCustomers from '/src/components/Customers/CardCustomers.vue'
import AddC from '/src/components/Customers/AddC.vue'
import SearchC from '/src/components/Customers/SearchC.vue'


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
app.component('CustomersList', CustomersList)
app.component('CardCustomers', CardCustomers)
app.component('Headers', Headers)
app.component('MainList', MainList)
app.component('CardBill', CardBill)
app.component('User', User)
app.component('CardServices', CardServices)

app.use(store)
app.use(router)
app.mount('#app')
