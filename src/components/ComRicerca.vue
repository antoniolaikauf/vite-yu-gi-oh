<script >
import { store } from '../store';
export default {
    comnuovo: "ricercatipocarta",

    data() {
        return {
            store
        }
    },
}

</script>

<template>
    <div class="col-12">
        <!-- selezione rarità  -->
        <select name="" id="" class="m-2" @change="$emit('sceltatipo')" v-model="store.TipoOption" >
            <option value="">selezione tipo carta</option>
            <option :value="option.archetype_name" v-for="(option, i) in store.ArrrayOption" :key="i">
                {{ option.archetype_name }}
            </option>
        </select>
    </div>
</template>

<style scoped lang="scss">
// caratteristiche selezione 
select {
    border-radius: 4px;
}
</style>
