<script >


export default {
    componente: "ComCard",

    props: {
        item: Object
    }
}

</script>

<template>
    <div v-for="CardIesima in item.card_images" class="text-center">

        <img :src="CardIesima.image_url" :alt="CardIesima.id">
        <h5 class="text-white py-3">
            {{ item.name }}
        </h5>
        {{ item.archetype }}
        {{ item.attribute }}
        {{ item.race }}
    </div>
</template>

<style scoped lang="scss">
img {
    width: 100%;
}
</style>