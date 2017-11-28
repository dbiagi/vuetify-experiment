<template lang="pug">
    v-container
        v-layout(row, wrap)
            v-flex(xs12)
                home-banner
            v-flex(xs12)
                module-menu
            v-flex
                featured-listings(:limit=8)
</template>

<script>
    import ModuleMenu from '../components/ModuleMenu.vue'
    import FeaturedListings from '../components/listing/FeaturedListings.vue'
    import HomeBanner from '../components/HomeBanner.vue'

    export default {
        components: {
            HomeBanner,
            FeaturedListings,
            ModuleMenu
        }
    }
</script>
