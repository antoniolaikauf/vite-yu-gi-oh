<script >

import ComCard from './ComCard.vue'
// importo dell file con dentro array di oggetti 
import { store } from '../store';

export default {
    componente: "ComMain",
    // componente cardiesima
    components: {
        ComCard
    },

    data() {
        return {
            store
        }
    },
    computed: {
        risultatoRicerca() {
            return store.ArrayCards.length
        }
    }
}

</script>

<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-12 p-4 bg-white mt-2">
                    <div class="quantitacard p-2">
                        <!-- found {{ store.ArrayCards.length }} -->
                        <div v-if="risultatoRicerca > 0"> found {{ risultatoRicerca }}</div>
                        <div v-else> non c'è nessuno risutato di {{ store.TipoOption }}</div>
                    </div>
                    <!-- lista di oggetti dentro all'array  -->
                    <ul class="d-flex p-0">
                        <li v-for="(card, i) in store.ArrayCards " class="mb-4 pb-4">
                            <ComCard :item="card" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.quantitacard {
    background-color: black;
    color: white;
}

// caratteristiche dentro alla lista con dentro le card 
ul {
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1%;

    li {
        // width: calc(100% / 5 - 10px);
        // margin: 0 5px;
        width: 19%;
        background-color: #d48f38;
    }
}
</style>
