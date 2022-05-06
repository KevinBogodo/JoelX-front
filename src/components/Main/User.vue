<template>
    <div class="head">
                   
                    <div class="profile">
                        <div class="info">
                            <p><b>Kevin BG</b></p>
                        </div>
                        <div class="profile-img">
                            <img src="" alt="">
                        </div>
                        <div class="profile-img">
                            <img src="" alt="">
                        </div>
                    </div>
            </div>
</template>

<script>
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
    }
}

</script>