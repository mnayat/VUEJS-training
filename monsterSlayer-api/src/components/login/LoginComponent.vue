<template>
  <div class="container imgbackground">
    <GameLoader v-if="showLoader" />
    <div class="row">
     <div class="col-sm-10 offset-sm-1">
       <form>
      <h1 class="display-3 text-center">LOGIN</h1>
      <div class="form-group col-sm col-xs-6 col-xs-offset-3 ">
        
        <label for="username">username</label>
        <input
          type="text"
          id="username"
          class="form-control"
          v-model="userData.username"
          :class="{ 'is-invalid': submitted && $v.userData.username.$error }"
        />
        <div v-if="submitted && !$v.userData.username.required" class="error ">username is required</div>
      </div>
      <div class="form-group col-sm">
        <label for="userpassword">password</label>

        <input
          type="password"
          id="userpassword"
          class="form-control"
          v-model="userData.password"
          :class="{ 'is-invalid': submitted && $v.userData.password.$error }"
        />
        <div v-if="submitted && !$v.userData.password.required" class="error ">password is required</div>
      </div>
      <div v-if="error" class="error text-center"> {{ errormessage }}</div>
      <div class="text-center attacksections">
        <span>
            <button @click.prevent="login" class="btn btn-danger px-2">Log In</button>
        </span>
          <span>
            <button @click.prevent="signUp" class="btn btn-danger px-2">Sign Up</button>
          </span>
     
      </div>
    </form>
       </div>  
      
    </div>
   </div>
</template>

<script>
import LoginMixins from "../../mixins/LoginMixins.vue";
import { required } from "vuelidate/lib/validators";
import GameLoader from '../../helpers/Overlay.vue';
export default {
  components: {
    GameLoader
  },
  data() {
    return {
      userData: {
        username: '',
        password: '',
      },
      error: false,
      errormessage: '',
      submitted: false,
      showLoader: false,
    };
  },
  mixins: [LoginMixins],
  validations: {
    userData: {
      username: { required },
      password: { required },
    },
    accountId: ''
  },
  methods: {
    login() {
     
      this.submitted = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      else{   this.showLoader = true;
      
      }
    
      this.loginUser(this.userData).then((res) => {
                   this.showLoader = false;
         console.log(res.body.accountId);
         let accountId = res.body.accountId;
  
         localStorage.setItem("accountId", JSON.stringify(accountId));
         this.$router.push('/arena').catch(()=>{});
        
      
        })
        .catch((err) => {
            this.showLoader = false;
          this.error = true;
          console.log(err.body.error);
          this.errormessage =err.body.error;
          
        });
        this.$emit('login',true);
    },
    signUp(){
         this.$router.push('/account').catch(()=>{});
    }
  },
};
</script>

<style scoped>

.imgbackground{
   background: url("../../assets/gameplaybackground.png");
   background-repeat: no-repeat;
  background-size: 100% 100%;
 }
  div.container{
    height: 545px;
    margin-top:30px;
      border-radius: 20px 20px;
 }
 h1, label {
   color: #ffff;
 }
 .attacksections span{
    padding: 5px 5px 10px;
    display: inline-block;
  
  }
 
 
</style>
