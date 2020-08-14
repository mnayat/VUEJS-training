<template>
  <div class="container imgbackground">  
      <br/>
          <div class="row">
                <StatusBar :character='player' :playerName='playerName'/>
                <div class="col-sm text-center">   <img src="../../assets/versus.png" class="imgVersus" /> </div>
                 <StatusBar :character='enemy' :playerName='enemy.characterName'/>
          </div>
            <div class="row w-100" >
                    <div class="col-sm">
                        <img :src="player.characterImg" class="imgplayer"  />
                    </div>
                    <div class="col-sm">
                        <img src="../../assets/enemy.jpg" class="imgEnemy" />
                    </div>
        </div>
         
            <div class="row evemtsections">
              <div class="col-sm attacksections">
                    <span  v-for="skill in player.skills" :key="skill.id" class="">
                         <button class="btn btn-danger" @click.prevent="playerattack(skill._id)"> {{ skill.name  }} </button>
                    </span>
                    </div>
                     <div class="col-sm messagesections">
                         <Message :message ='message'/>
       
                    </div>
            </div>
 </div>
</template>

<script>
import StatusBar from '../battle/StatusBar.vue';
import Message from '../battle/Message.vue';
import characterplayer from '../../scripts/character';
import enemyCharacter from '../../scripts/enemy.js'

import MonsterSlayerMixins from "../../mixins/MonsterSlayerMixins.vue";

export default {

  components: {
    StatusBar,
    Message,
  
  },
  props: {
    battleArea: Boolean,
    character:Object,
  },
 data() {
     return {
        player:{},
        enemy: enemyCharacter[0],
        playerturns: true,
        message : '',
        characterId: 0,
        items: '',
        playerName: '',
        increaseMana:20,
        accountId: ''
     }
  },
  created: function() {
     console.log( 'after login' +  JSON.parse(localStorage.getItem('accountId')));
     this.accountId =JSON.parse(localStorage.getItem('accountId'));
     this.getMonsterSlayer(this.accountId).then(res => {
      this.player.skills =[];
      this.items = res.classType;
       this.player = characterplayer.find(element => element.classType === this.items);
      this.playerName = res.name;

       res.skills.forEach((el) => {
         console.log(this.player.skills.push(el));
       })
           console.log(this.player.skills);
      }) .catch((err) => {
              console.log(err);
      
     });
  },
  mixins : [MonsterSlayerMixins],
  
  methods : {
      playerattack(attackValue){
            
         var [skills] = this.player.skills.filter(function(s) {return s._id == attackValue});

          if(skills.name==='Focus' && skills.target==='self')
          {
                if( this.player.mana ===100)
                {
                    this.message = `${this.playerName} have sufficient mana !!`
                 
                }
                else{
                 this.message = `${this.playerName} regenerate mana !!`
                 this.player.mana += this.increaseMana;
                }
               
          }
          else if(skills.target==='self'){
              if(!this.isInsufficientMana(true)){
                  this.message = `${this.playerName} have insufficient mana !!`;
              }
              else{
                  this.message = `${this.playerName} ${skills.name} himself !!`
                  this.player.health-= skills.damage;
                  this.player.mana-= skills.cost;
              }
        
         
          }
          else{
               if(skills.name==='"Basic Attack' && skills.target==='enemy')
               {
                this.enemy.health-= skills.damage;
                this.player.mana-= skills.cost;
                this.gameMessage(this.enemy.characterName, skills.damage,skills.target)
               }
               else{
                  if(!this.isInsufficientMana(true,this.playerName)){
                       this.message = `${this.playerName} have insufficient mana !!`
                    }
                    else{
                      this.enemy.health-= skills.damage;
                      this.player.mana-= skills.cost;
                      this.gameMessage(this.enemy.characterName, skills.damage,skills.target);
                    }
               }
          }
           setTimeout(()=>{
           
             this.enemyAttack();
              if(this.isGameOver())
              return;
          },1000);
      },
      enemyAttack(){
        var enemySkills =  this.enemy.mana <=0 ? 2 : Math.floor(Math.random() * this.enemy.skills.length ) + 1; 
        var [skills] = this.enemy.skills.filter(function(s) {return s.id == enemySkills});
          console.log(enemySkills)
          
          if(skills.name ==='Focus' && skills.target==='self')
          {
            if( this.enemy.mana ===100)
            {
                this.message = `${this.enemy.characterName} have sufficient mana !!`
            }
            else{
              this.message = `${this.enemy.characterName} regenerate mana !!`
              this.enemy.mana += this.increaseMana;
            }

          }
          else{
              if(skills.name==='"Basic Attack' && skills.target==='player')
               {
                  this.player.health-= skills.damage;
                  this.enemy.mana-= skills.cost;
                  this.gameMessage(this.playerName, skills.damage,skills.target)
               }
               else{
                    if(!this.isInsufficientMana(false)){
                         this.message = `${this.enemy.characterName} have insufficient mana !!`
                    }
                    else {
                        this.player.health-= skills.damage;
                        this.enemy.mana-= skills.cost;
                        this.gameMessage(this.playerName, skills.damage,skills.target)
                    }

               }
          }
      },
      startGame(){
            this.enemy.health = 300;
            this.enemy.mana = 100;
            this.player.health = 300;
            this.player.mana = 100;
            this.message='';
      },
      isGameOver() {
          if(this.enemy.health <=0){
            if (confirm('You won! Play again?')) {
              this.startGame();
          }
               return true;
          }
           else if(this.player.health <=0){
               if (confirm('Enemy won! Play again?')) {
              this.startGame();
          }
               return true;
          }
          return false;
       },
       isInsufficientMana(isPlayer){
          if(isPlayer){
            if(this.player.mana <=0 && this.player.mana >=20 ){
               this.player.mana =0;
             
               return false;
            }
          }
          else{
              if(this.enemy.mana <=0 && this.enemy.mana >=20){
              this.enemy.mana =0;  return false;
            }
          }
           return true;
       },
       gameMessage(character,cost,target){
         if(target === 'self')
         {
             this.message = `${character} increase ${cost} of mana`
         }
         else{
              this.message = `${character} received ${cost} of damage`
         }
        
         
       }
  }
   

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .imgbackground{
   background: url("../../assets/background.png");
 }
 .imgplayer{
    margin-top:39px;
    padding-left: 137px;
 }
 .imgEnemy{
          margin-top: 57px;
    margin-left: 154px;
 }
 div.container{
    height: 545px;
    margin-top:30px;
 }
 .imgVersus {
   margin-top: -56px;
 }
  .attacksections{
   border: solid #b7b701;
    background: #1ea1b3;
    height: 113px;
    border-radius: 20px 20px;
    margin: 0 5px 15px 20px;
    padding: 10px 20px;             

  }
  .attacksections span{
    padding: 2px 5px 10px;
    text-transform: uppercase;
    display: inline-block;
  
  }
  .evemtsections{
        padding: 0px 20px 15px;
  }
  .messagesections{
    border: solid #b7b701;
    background: #1ea1b3;
    height: 113px;
    border-radius: 20px 20px;
    margin: 0 5px 15px 20px;
    padding: 10px 20px;             

  }
 
</style>
 