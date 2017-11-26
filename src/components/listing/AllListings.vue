<template lang="pug">
    v-container
        v-layout(wrap)
            v-flex(v-for="listing in listings", xs12, sm6, md3, :key="listing.id")
                v-card
                    v-card-media(:src="listing.img", :height="cardHeight")
                    v-card-title {{listing.title}}

</template>

<script>
    export default {
        name: 'all-listings',
        created() {
            this.$store.dispatch('fetch_listings', {
                page: this.currentPage,
                itensPerPage: this.itensPerPage
            })
        },
        data() {
            return {
                cardHeight: "200px"
            }
        },
        computed: {
            listings() {
                return this.$store.state.listing.listings
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
