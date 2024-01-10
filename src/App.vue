<script >
// importo componente header
import ComHeader from './components/ComHeader.vue'
// importo componente main
import ComMain from './components/ComMain.vue'

import ricercatipocarta from './components/ComRicerca.vue'
// importo componente store con dentro dati 
import { store } from './store';
// importo componente axios per fare richiesta 
import Axios from 'axios';

export default {
  components: {
    ComHeader,
    ComMain,
    ricercatipocarta
  },

  data() {
    return {
      store
    }
  },
  methods: {
    RichiestaApiCards() {
      let urlAPI = store.richiestaApi
      if (store.TipoOption !== "") {
        // urlAPI += `&${archetype}=${store.TipoOption}`
        urlAPI += `&${store.nameParam}=${store.TipoOption}`
        // console.log(store.TipoOption);
      }

      Axios.get(urlAPI)
        .then((risposta => {
          store.ArrayCards = risposta.data.data
          // console.log(store.ArrayCards);
          // controllo se c'è dentro il tipo di archetype che cerca l'utente 
          // guardare pe domani quale sarebbe l'opzione migliore 
          // for (let i = 0; i < store.ArrayCards.length; i++) {
          //   if (store.ArrayCards[i].archetype !== store.TipoOption && store.TipoOption !== "") {
          //     store.ArrayCards = []
          //   }
          // }
        }))
        // controllo se ci sono dei errori
        .catch((err) => {
          console.log(err);
        })
    },
    RichiestaApiOption() {
      Axios.get(store.optionApi)
        .then((risposta) => {
          // console.log(risposta.data);
          store.ArrrayOption = risposta.data
        })
        .catch((err) => {
          console.log(err);
        })
    },
  },
  created() {
    this.RichiestaApiCards()
    this.RichiestaApiOption()
  },
}
</script>

<template>
  <ComHeader />

  <main>
    <div class="container">
      <div class="row">
        <ricercatipocarta @sceltatipo="RichiestaApiCards" />
        <ComMain />
      </div>
    </div>
  </main>
</template>

<style lang="scss">
@use './style/general.scss';

main {
  background-color: #d48f38;
}
</style>
