<template>
    <div class="main-list">
        <h1>Services</h1>
        <CardServices />
        <CardServices />
        <CardServices />
        <CardServices />
        <CardServices />
        <CardServices />
        <CardServices />
        <CardServices />
        <CardServices />
        <CardServices />
    </div>
</template>


<script>
import axios from 'axios'
export default {
    date() {
        return{
            dat: null,
        }
    },
    mounted() {
        axios
        .get('http://joelx.test/api/auth/services')
        .then((response) =>{
            this.dat = response;
            console.log(this.dat)
        });
    }
}

</script>