<template lang="pug">
    v-container
        v-carousel
            v-carousel-item(
                v-for="banner in banners",
                :key="banner.id",
                :src="banner.img"
            )
</template>

<script>
    export default {
        name: 'home-banner',
        created() {
            this.$store.dispatch('fetch_home_banners')
        },
        computed: {
            banners() {
                return this.$store.state.banner.home
            }
        }
    }
</script>

<style lang="css">
</style>
