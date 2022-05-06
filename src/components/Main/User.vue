<template>
    <div class="head">
                   
                    <div class="profile">
                        <div class="info">
                            <p> {{user.surname}} <b> {{user.name}} </b> | {{user.email}} </p>
                        </div>
                        <div class="profile-img">
                            <img src="" alt="">
                        </div>
                        <div @click="logout" class="profile-img">
                            <img src="" alt="">
                        </div>
                    </div>
            </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    name: 'Profile',
    mounted: function () {
        console.log(this.$store.state.user);
        // check if connected
        if(this.$store.state.user.userId == -1){
            this.$router.push('/');
            return;
        }
        this.$store.dispatch('getUserInfos');
    },
    computed: {
        ...mapState({
            user: 'userInfos',
        })
    },
    methods: {
        logout() {
            this.$store.commit('logout');
            this.$router.push('/');
        }
    }
}
 
</script>