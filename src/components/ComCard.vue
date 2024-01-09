<script >
import { store } from '../store';
export default {
    componente: "ComCard",
    // nome array con dentro dati 
    props: {
        item: Object
    },
    data() {
        return {
            store,
        }
    },
}

</script>

<template>
    
    <!-- ciclo dentro all array di oggetti per prendere immagine della card   -->
    <div class="text-center" >
        <img :src="item.card_images[0].image_url" :alt="item.id">
        <!-- nome cartaiesima -->
        <h5 class="text-white py-3">
            {{ item.name }}
        </h5>
        <!-- rarità cartaiesima  -->
        {{ item.archetype }}
    </div>
</template>

<style scoped lang="scss">
img {
    width: 100%;
}


</style>