<template>
    <div class="b-sphinx">
            <div class="main-sphinx">
                <div class="header-sphinx">
                    <h2> {{title}} </h2>
                    <!-- <p>contact us</p> -->
                    <div class="contactus">
                        <form method="POST" action="">

                             <input v-if="mode == 'login'" v-model="email" class="inp-sphinx" type="Email" 
                            placeholder="Email" required name="email" autofocus>

                            <div v-else>
                                <input v-model="email" class="inp-sphinx" type="Email" 
                                placeholder="Email">
                               
                                <input class="inp-sphinx" v-model="name" type="text" 
                                placeholder="Name">

                                <input class="inp-sphinx" v-model="surname" type="text" placeholder="Surname">

                                <select v-model="sex" class="inp-sphinx" name="sexe">
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>

                                 <input  class="inp-sphinx" v-model="phone" type="text" placeholder="Phone">
                            </div>

                            <input class="inp-sphinx" v-model="password" type="password" placeholder="Enter Pasword" 
                            required name="password" autocomplete="current-password">

                            <!-- <input v-if="mode == 'create'"  class="inp-sphinx" type="password" placeholder="Confirm Pasword" required 
                            name="confirm-password" autocomplete=" confirm-password"> -->

                                <p v-if="mode == 'login' && status == 'error_login' " class="danger">
                                    Incorect Email or password.
                                </p>
                                <p v-if="mode == 'create' && status == 'error_create' " class="danger">
                                    Incorect Email or password.
                                </p>

                                <button @click="login()" v-if="mode == 'login'" :class="{'button-disabled' : !validatedFields}" class="button-sphinx" type="button">
                                   <span v-if="status == 'loading'" >In progress...</span>
                                   <span v-else>Log in</span> 
                                </button>
                          
                                <button @click="createAccount()" v-else :class="{'button-disabled' : !validatedFields}" class="button-sphinx" type="button">
                                    
                                     <span v-if="status == 'loading'" >In progress...</span>
                                   <span v-else>create account</span>
                                </button>
                           
                        </form>
                        <a class="connexion" v-if="mode == 'login'" @click="switchToCreateAccount()" >creer un compte ?</a>
                        <a class="connexion" v-else @click="switchToLogin()">J'ai déja un compte</a>
                    </div>
                </div>
               
            </div>
     </div>
</template>

<script>
import { mapState } from "vuex";
    export default {

        data() {
            return {
                title : 'JoelX',
                email : '',
                name : '',
                surname : '',
                sex : '',
                phone : '',
                password : '',
                mode: 'login'
            };
        },
        mounted: function () {
            if(this.$store.state.user.userId !== -1){
               this.$router.push('/home');
            return;
        }
        },
        computed: {
            validatedFields: function() {
                if (this.mode == 'create') {
                    if(this.email != "" && this.surname != "" && this.name != "" && this.sex != "" && this.password != "") {
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


            },
            ...mapState(['status'])
        },
        methods: {
            switchToCreateAccount: function() {
                this.mode = 'create';
            },   
            switchToLogin: function() {
                this.mode = 'login';
            },
            login: function () {
                const self = this;
                 this.$store.dispatch('login',{
                   email: this.email,
                   password: this.password,
                }).then(function (){
                    self.$router.push('/home')
               }, function (error) {
                    console.log(error);
               })
            },
            createAccount: function() {
                const self = this;
               this.$store.dispatch('createAccount',{
                   email: this.email,
                   name: this.name,
                   surname: this.surname,
                   sex: this.sex,
                   phone: this.phone,
                   password: this.password,
               }).then(function (response){
                    self.login();
               }, function (error) {
                    console.log(error);
               })
            
            },
        }

    };

</script>