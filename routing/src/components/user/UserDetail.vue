<template>
<div>
    <h3>Some User Details</h3>
    <p> {{ users.firstName }} </p>
</div>

</template>
<script>

  import { getUser } from "../../helpers/user-helper";

export default {
    created(){
         console.log(this.$route.params);
    },
    data(){
        return {
            users : getUser(this.$route.params.id)
        }
    }

    
}
</script>