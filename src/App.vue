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
    RichiestaApiCards() {
      Axios.get(store.richiestaApi)
        .then((risposta => {
          store.ArrayCards = risposta.data.data
          console.log(risposta.data.data);
        }))
        // controllo se ci sono dei errori
        .catch((err)=>{
          console.log(err);
        })
    },
    RichiestaApiOption(){
      Axios.get(store.optionApi)
      .then((risposta)=>{
        // console.log(risposta.data);
        store.ArrrayOption=risposta.data
      })
    }
  },
  created() {
    this.RichiestaApiCards()
    this.RichiestaApiOption()
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
