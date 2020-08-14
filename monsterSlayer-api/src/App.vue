<template>
  <div id="app">
     <router-view></router-view>
  </div>
 
</template>

<script>

  export default {
    name: 'App',
  
   created() {
    if (localStorage.getItem("accountId") == null) {
       this.$router.push('/').catch(()=>{});
    }

  },
   }

</script>

<style>
 .error{
   color:yellow;
  
 }
</style>
