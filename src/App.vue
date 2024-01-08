<script >
import ComHeader from './components/ComHeader.vue'

import ComMain from './components/ComMain.vue'

import { store } from './store';

export default {
  components: {
    ComHeader,
    ComMain
  },

  data(){
    return{
      store
    }
  }
}
</script>

<template>
  <ComHeader />

  <ComMain />
</template>

<style lang="scss">
@use './style/general.scss';


.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
