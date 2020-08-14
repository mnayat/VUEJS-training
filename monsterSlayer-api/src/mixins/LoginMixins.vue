<script>
const apiUrl =  'https://monster-slayer-api-staging.herokuapp.com/accounts/login';

export default {
    methods: {
         loginUser(userData){
                 return this.$http.post(apiUrl, userData);
         }
    }
}
</script>