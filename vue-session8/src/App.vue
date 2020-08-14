<template>
  <div>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Directives</h1>
        <p v-local-highlight.delayed.blink="'red'"> Color This</p>
        <p v-local-highlight:background.blink="'red'">Blinking Text</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    'local-highlight': {
      bind(el, binding, vnode) {
        var delay = 0;

        if (binding.modifiers.delayed) {
          delay = 3000;
        }

        if (binding.modifiers.blink) {
          const mainColor = binding.value;
          const secondColor = 'blue';
          let currentColor = mainColor;

          setTimeout(() => {
            setInterval(() => {
              currentColor == mainColor ? currentColor = secondColor : currentColor = mainColor;
              if (binding.arg == 'background') {
                el.style.backgroundColor = currentColor;
              } else {
                el.style.color = currentColor;
              }
            }, 1000);
          }, delay);

        } else {
          setTimeout(() => {
            if (binding.arg == 'background') {
              el.style.backgroundColor = binding.value;
            } else {
              el.style.color = binding.value;
            }
          }, delay);
        }        
      }
    }
  }
}
</script>

<style>

</style>
