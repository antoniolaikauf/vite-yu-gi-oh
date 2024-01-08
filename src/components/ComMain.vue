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

}

</script>

<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <!-- selezione rarità  -->
                    <select name="" id="" class="m-2">
                        <option value="alien">alien</option>
                    </select>
                </div>
                <div class="col-12 p-4 bg-white mt-2">
                        <div class="quantitacard p-2">
                            found {{ store.ArrayCards.length }}
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
section {
    background-color: #d48f38;
// caratteristiche selezione 
    select{
        width: 100px;
        border-radius: 4px;
    }

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
}
</style>
