<template>
  <div>
      <p> {{ message }} </p>
  </div>
</template>

<script>


export default {
   props: {
        message: String,
   }
}
</script>

<style scoped>
  div p {
     color: white; 
     font-weight: bold;
     font-size: 20px;
     
  } 
</style>