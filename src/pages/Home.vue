<template lang="pug">
    v-container
        v-layout(row, wrap)
            v-flex
                banner
            v-flex(xs12)
                featured-listings(:limit=4)
            v-flex
                h1 All Listings
            v-flex(xs12)
                all-listings(:currentPage=1, :itensPerPage=6)
</template>

<script>
    import ModuleMenu from '../components/ModuleMenu.vue'
    import FeaturedListings from '../components/listing/FeaturedListings.vue'
    import Banner from '../components/Banner.vue'
    import AllListings from '../components/listing/AllListings.vue'

    export default {
        components: {
            AllListings,
            Banner,
            FeaturedListings,
            ModuleMenu
        }
    }
</script>
