<script>
const apiUrl = 'https://monster-slayer-api-staging.herokuapp.com/accounts';

export default {
    methods: {
         createAccount(userData){
                 return this.$http.post(apiUrl, userData);
         }
    }
}
</script>