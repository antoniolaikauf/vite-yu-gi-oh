<script >

import ComCard from './ComCard.vue'

import { store } from '../store';

export default {
    componente: "ComMain",

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
                    <select name="" id="" class="m-2">
                        <option value="alien">alien</option>
                    </select>
                </div>
                <div class="col-12 p-4 bg-white mt-2">
                        <div class="quantitacard p-2">
                            found 20 card
                        </div>
                        <ul class="d-flex p-0">
                            <li v-for="(card, i) in store.ArrayCards " class="mb-4">
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

    .quantitacard {
        background-color: black;
        color: white;
    }

    ul {
        flex-wrap: wrap;

        li {
            // width: calc(100% / 5 - 10px);
            // margin: 0 5px;
            width: 20%;
            background-color: #d48f38;
        }
    }
}
</style>
