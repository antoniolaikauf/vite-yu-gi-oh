<script >
export default {
    componente: "ComCard",
// nome array con dentro dati 
    props: {
        item: Object
    }
}

</script>

<template>
    <!-- ciclo dentro all array di oggetti per prendere immagine della card   -->
    <div v-for="CardIesima in item.card_images" class="text-center">

        <img :src="CardIesima.image_url" :alt="CardIesima.id">
        <!-- nome cartaiesima -->
        <h5 class="text-white py-3">
            {{ item.name }}
        </h5>
        <!-- rarità cartaiesima  -->
        {{ item.race }}
    </div>
</template>

<style scoped lang="scss">
img {
    width: 100%;
}
</style>