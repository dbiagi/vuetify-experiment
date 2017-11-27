<template lang="pug">
    v-container
        v-layout(wrap)
            v-flex(v-for="listing in listings", xs12, sm6, md4, :key="listing.id")
                v-card
                    v-card-media(:src="listing.img", :height="cardHeight")
                    v-card-title {{listing.title}}
        .text-xs-center
            v-pagination(:length="pages", v-model="currentPage")

</template>

<script>
    export default {
        name: 'all-listings',
        created() {
            this.$store.dispatch('fetch_listings', {
                page: this.currentPage,
                itensPerPage: this.itensPerPage
            })
            this.$store.dispatch('fetch_listings_count')
        },
        data() {
            return {
                cardHeight: "400px"
            }
        },
        computed: {
            listings() {
                return this.$store.state.listing.listings
            },
            pages() {
                return Math.ceil(this.$store.state.listing.total/this.itensPerPage)
            }
        },
        props: {
            itensPerPage: Number,
            currentPage: {
                type: Number,
                default: 1
            }
        }
    }
</script>
