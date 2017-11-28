<template lang="pug">
    div
        h1 {{ title }}
        v-container(grid-list-md)
            v-layout(row, wrap, justify-space-between)
                v-flex(v-for="listing in listings", md3, xs12, sm6, :key="listing.id")
                    listing-card(:listing="listing", height="200px")
</template>

<script>
    import ListingCard from './ListingCard.vue'

    export default {
        name: 'featured-listings',
        components: {ListingCard},
        created() {
            this.$store.dispatch('fetch_featured_listings', {limit: this.limit})
        },
        data() {
            return {
                title: 'Featured Listings',
            }
        },
        computed: {
            listings() {
                return this.$store.state.listing.featured
            }
        },
        props: {
            limit: {
                default: 10,
                type: Number,
                validator(val) {
                    return val > 0
                }
            }
        }
    }
</script>
