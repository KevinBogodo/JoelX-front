<template>
   
        <div class="sidebar" :class="{'full': isAddClass}">
                <a @click="OpenHome('home')" :class="{ active: isActive('home') }">
                    <img class="navico" src="#">
                    <h3>Home</h3>
                </a>

                <a @click="OpenCustomers('customers')" :class="{ active: isActive('customers') }">
                    <img class="navico" src="#">
                    <h3>Customers</h3>
                </a>

               

                <a v-if="isAddClass" @click ="OpenMenu()">
                    <img class="navico" src="#">
                    <h3>Open</h3>
                </a>
                <a v-else @click ="CloseMenu()">
                    <img class="navico" src="#">
                    <h3>Close</h3>
                </a>

              

        </div>
</template>


<script>

export default {
    data() {
        return { 
            activeItem: 'about',
            isAddClass: false,
        }
    },
    methods: {
        isActive(menuItem) {
            console.log(menuItem)
             return this.activeItem === menuItem
        },
        OpenHome(menuItem) {
            this.$router.push({ name: 'Home'})
            this.activeItem = menuItem
        },
        OpenCustomers(menuItem) {
            this.$router.push({ name: 'Customers'})
            this.activeItem = menuItem;
            this.isAddClass = true;  
        },
        OpenMenu() {
            this.isAddClass = false;
        },
         CloseMenu() {
            this.isAddClass = true;
        }
    }

       
}
</script>