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
    }
}

</script>

<template>
    ciao

    <ComCard />
</template>

<style scoped lang="scss">
.read-the-docs {
    color: #888;
}
</style>
