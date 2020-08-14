<template>

  <div class="col-sm">
              <div class="progress">
                <div class="progress-bar" role="progressbar" :style="characterBar" :aria-valuenow="characterProgress.valuenow" :aria-valuemin="characterProgress.min" 
                aria-valuemax="300"></div>
              </div>
                <div class="progress">
                    <div class="progress-bar bg-success" role="progressbar" :style="{width: character.mana + '%' }" aria-valuenow="300" aria-valuemin="0" 
                    aria-valuemax="300"></div>
                </div>
         
       
    <p >    {{ playerName }} </p>

</div>
</template>

<script>

export default {
 props : {
       character : Object,
       playerName: String
   },
   data(){
      return{ 
        characterProgress: {
          valuenow:300,
          min: 0,
          max:300
        
        }
      }
   },
  computed : {
      characterBar:function(){
         var inlineStyles = {
           width: (this.character.health-this.characterProgress.min)*100/(this.characterProgress.max-this.characterProgress.min) + '%'
         }
         if(this.character.health<=0){
          inlineStyles.backgroundColor = 'red';
         }else if (this.character.health < 16) {
        inlineStyles.backgroundColor = 'yellow';
         }

           return inlineStyles;
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  p {
    color: #025545;
      margin-left: 114px;
        font-weight: bold;
  }
  .progress{
    border: solid 1px #e3d31f;
    margin: 0 0 2px;
  }
</style>
