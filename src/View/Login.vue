<template>
    <div class="b-sphinx">
            <div class="main-sphinx" v-if="LoggedIn === false">
                <div class="header-sphinx">
                    <h2> {{title}} </h2>
                    <!-- <p>contact us</p> -->
                    <div class="contactus">
                        <form method="POST" action="" @submit.prevent="onSubmit">
                            <input class="inp-sphinx" v-model="email" type="Email" placeholder="Email" 
                            required id="email" name="email" autofocus>
                            <input class="inp-sphinx" type="password" placeholder="Enter Pasword / passcode" required 
                                    id="password" name="password" autocomplete="current-password">
                            <center><button class="button-sphinx" type="button">Log in</button></center>
                        </form>
                    </div>
                </div>
               
            </div>
     </div>
</template>

<script>
    export default {

        data() {
            return {
                title : 'JoelX',
                email : '',
                password : '',
                LoggedIn : false
            };
        },

    };

</script>