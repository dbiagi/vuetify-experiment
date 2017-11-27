<template lang="pug">
    v-container(grid-list-md)
        all-listings(:itensPerPage="itensPerPage", :currentPage="page")
</template>

<script>
    import AllListings from '../../components/listing/AllListings.vue'

    export default {
        components: {AllListings},
        name: 'listing-home',
        data() {
            return {
                itensPerPage: 9
            }
        },
        computed: {
            page() {
                return this.$route.params.id || null
            }
        }
    }
</script>
