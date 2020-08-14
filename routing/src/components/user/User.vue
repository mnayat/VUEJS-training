<template>
<div>
    <h1>The User Page</h1>
        <button class="btn btn-primary" @click.prevent="navigatetoHome">Home</button>
        <router-view></router-view>
   </div>
</template>

<script>
export default {
    methods: {
        navigatetoHome(){
            this.$router.push('/');
        }
    },
    created(){
        console.log(this.$route.params.id);
         console.log(this.$route.query.name);
    }
}
</script>