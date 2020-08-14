<script>
  
  const apiUrl = 'https://monster-slayer-api-staging.herokuapp.com/accounts';
export default {
    methods:{
            getMonsterSlayer(accountId) {
             return this.$http.get(`${apiUrl}/${accountId}/character`).then( res => res.json());
            }
    }
    
}
</script>