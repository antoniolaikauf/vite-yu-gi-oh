<script >
// importo componente header
import ComHeader from './components/ComHeader.vue'
// importo componente main
import ComMain from './components/ComMain.vue'
// importo componente store con dentro dati 
import { store } from './store';
// importo componente axios per fare richiesta 
import  Axios  from 'axios';

export default {
  components: {
    ComHeader,
    ComMain
  },

  data() {
    return {
      store
    }
  },
  methods: {
    RichiestaApi() {
      Axios.get(store.richiestaApi)
        .then((risposta => {
          store.ArrayCards = risposta.data.data
          // console.log(risposta.data.data);
        }))
    }
  },
  created() {
    this.RichiestaApi()
  }
}
</script>

<template>
  <ComHeader />

  <ComMain />
</template>

<style lang="scss">
@use './style/general.scss';
</style>
