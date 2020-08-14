<template>
  <div>
     
    <div class="container imgbackground">
       <GameLoader v-if="showLoader" />
        <div class="row">
             <div class="col-sm-10 offset-sm-1">
                       <form @submit.prevent="accountSignUp">
     
          <h1 class="display-3 text-center">Account Creation</h1>
          <hr />
          <div class="form-group">
            <label for="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              class="form-control"
              v-model="userData.fullName"
              :class="{ 'is-invalid': submitted && $v.userData.fullName.$error }"
            />
            <div v-if="submitted && !$v.userData.fullName.required" class="error"> Full Name is required </div>
       
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="text"
              id="email"
              v-model="userData.email"
              class="form-control"
              :class="{ 'is-invalid': submitted && $v.userData.email.$error }"
            />
            <div v-if="submitted && !$v.userData.email.required" class="error"> Email is required</div>
            <div v-if="submitted && !$v.userData.email.email" class="error">  Email is invalid</div>
          </div>
          <div class="form-group">
            <label for="username">Username</label>
            <input
              type="text"
              id="username"
              v-model="userData.username"
              :class="{ 'is-invalid': submitted && $v.userData.username.$error }"
              class="form-control"
            />
            <div v-if="submitted && !$v.userData.username.required" class="error">username is required</div>
            <div v-if="submitted && !$v.userData.username.minLength" class="error">  Username must have at least
              {{ $v.userData.username.$params.minLength.min }} letters
            </div>
            <div v-if="submitted && !$v.userData.username.maxLength" class="error">username must have at max
                {{ $v.userData.username.$params.maxLength.max }} letters
            </div>
          </div>
          <div class="form-group">
            <label for="userpassword">Password</label>
            <input
              type="password"
              id="userpassword"
              class="form-control"
              v-model="userData.password"
              :class="{ 'is-invalid': submitted && $v.userData.password.$error }"
            />
            <div v-if="submitted && !$v.userData.password.required" class="error">
              Password is required
            </div>
            <div v-if="submitted && !$v.userData.password.minLength" class="error">
              Password must have at least
              {{ $v.userData.password.$params.minLength.min }} letters
            </div>
            <div v-if="submitted && !$v.userData.password.maxLength" class="error">
              Password must have at max
              {{ $v.userData.password.$params.maxLength.max }} letters
            </div>
          </div>
          <div class="form-group">
            <label for="characterName">Character Name</label>
            <input
              type="text"
              id="characterName"
              class="form-control"
              v-model="userData.characterName"
              :class="{ 'is-invalid': submitted && $v.userData.characterName.$error }"
            />
            <div v-if="submitted && !$v.userData.characterName.required" class="error">
              Character Name is required
            </div>
            <div v-if="submitted && !$v.userData.characterName.minLength" class="error">
              Character Name must have at least
              {{ $v.userData.characterName.$params.minLength.min }} letters
            </div>
            <div v-if="submitted && !$v.userData.characterName.maxLength" class="error">
              Character Name must have at max
              {{ $v.userData.characterName.$params.maxLength.max }} letters
            </div>
          </div>
          <div class="form-group">
            <label for="characterSelect">Character Class</label>
            <select
              id="characterSelect"
              class="form-control"
              v-model="selected"
              @change="onChangeCharacter($event)"
              :class="{ 'is-invalid': submitted && $v.selected.$error }"
            >
              <option
                v-for="character in characters"
                :key="character.classType"
                v-bind:value="character.classType"
              >
                {{ character.characterName }}
              </option>
            </select>
               <div v-if="submitted && !$v.selected.required " class="error">
              Character Class is required
            </div>
          </div>
       
        <div>
          <button class="btn btn-danger px-2">Submit</button>
        </div>
      </form>
             </div>

        </div>

     
    </div>
  </div>
</template>

<script>
import characterplayer from "../../scripts/character";
import SignUpMixins from "../../mixins/SignUpMixins.vue";
import { required, minLength, maxLength, email } from "vuelidate/lib/validators";
import GameLoader from '../../helpers/Overlay.vue';

export default {
    components: {
    GameLoader
  },
  data() {
    return {
      selected: '',
      characters: characterplayer,
      register: true,
      battle: false,
      characterStorage: '',
      submitted: false,
      userData: {
        fullName: '',
        email: '',
        username: '',
        password: '',
        characterName: '',
        classType: '',
      },
      showLoader: false,
    };
  },
  mixins: [SignUpMixins],
  validations: {
      userData: {
        fullName: { required },
        email: { required, email },
        username: { required, minLength: minLength(6), maxLength: maxLength(20) },
        password: { required, minLength: minLength(6), maxLength: maxLength(20) },
        characterName: { required,minLength: minLength(6), maxLength: maxLength(20) }
    },
    selected: {required}
  },
  methods: {
    onChangeCharacter(event) {
      this.characterStorage = event.target.value;
    },
    accountSignUp() {
      this.submitted = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
       else{   
         this.showLoader = true;
      
      }
      this.userData.classType = this.characterStorage;
      console.log(this.userData.classType);
        console.log(this.userData);
      this.createAccount(this.userData)
        .then((res) => {
          console.log(res);
           this.showLoader = false;
         let accountId = res.body.accountId;
         localStorage.setItem("accountId", JSON.stringify(accountId));
         this.$router.push('/arena').catch(()=>{});
        })
        .catch((err) => {
          console.log(err.body.error);
        });
    
    },
  },
  computed: {
     selectErrors () {
      const errors = []
      if (!this.$v.selected.$dirty) return errors
      !this.$v.selected.required && errors.push('Item is required')
      return errors
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
.imgbackground{
   background: url("../../assets/gameplaybackground.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
 }
   div.container{
    height: 800px;
    margin-top:30px;
      border-radius: 20px 20px;
 }
 h1, label {
   color: #ffff;
 }

</style>
