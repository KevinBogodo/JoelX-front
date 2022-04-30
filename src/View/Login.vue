<template>
    <div class="b-sphinx">
            <div class="main-sphinx" v-if="LoggedIn === false">
                <div class="header-sphinx">
                    <h2> {{title}} </h2>
                    <!-- <p>contact us</p> -->
                    <div class="contactus">
                        <form method="POST" action="">

                             <input v-if="mode == 'login'" v-model="email" class="inp-sphinx" type="Email" 
                            placeholder="Email" required name="email" autofocus>

                            <div v-else>
                                <input class="inp-sphinx" v-model="Name" type="text" 
                                placeholder="Name" required  name="name" autofocus>

                                <input class="inp-sphinx" v-model="surname" type="text" placeholder="Surname" 
                                required  name="surname" autofocus>

                                <input  class="inp-sphinx" v-model="sexe" type="text" placeholder="sexe" 
                                required  name="sexe" autofocus>
                            </div>

                            <input class="inp-sphinx" v-model="password" type="password" placeholder="Enter Pasword" 
                            required name="password" autocomplete="current-password">

                            <!-- <input v-if="mode == 'create'"  class="inp-sphinx" type="password" placeholder="Confirm Pasword" required 
                            name="confirm-password" autocomplete=" confirm-password"> -->

                            <center v-if="mode == 'login'">
                                <button :class="{'button-disabled' : !validatedFields()}" class="button-sphinx" type="button">Log in</button>
                            </center>
                            <center v-else>
                                <button class="button-sphinx" type="button">create account</button>
                            </center>
                        </form>
                        <a v-if="mode == 'login'" @click="switchToCreateAccount()" >creer un compte ?</a>
                        <a v-else @click="switchToLogin()">J'ai déja un compte: connexion</a>
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
                name : '',
                surname : '',
                sexe : '',
                password : '',
                mode: 'login'
            };
        },
        computed: {
            validatedFields: function() {
                if (this.mode == 'create') {
                    if(this.email != "" && this.surname != "" && this.name != "" && this.sexe != "" && this.password != "") {
                        return true;
                    } else {
                        return false;
                    } 
                } else {
                    if(this.email != "" && this.password != "") {
                        return true;
                    } else {
                        return false;
                    }
                }

                }
            }
        },
        methods: {
            switchToCreateAccount: function() {
                this.mode = 'create';
            },   
            switchToLogin: function() {
                this.mode = 'login';
            }
        }

    };

</script>