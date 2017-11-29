<template lang="pug">
    v-container(grid-list-md)
        v-layout(wrap)
            v-flex(v-for="listing in listings", xs12, sm6, md4, :key="listing.id")
                v-card
                    v-card-media(:src="listing.img", :height="cardHeight")
                    v-card-title {{listing.title}}
        .text-xs-center
            v-pagination(:length="pages", v-model="page")

</template>

<script>
    export default {
        name: 'all-listings',
        created() {
            this.$store.dispatch('fetch_listings_count')
            this.fetch()
        },
        data() {
            return {
                cardHeight: '400px',
                page: this.currentPage
            }
        },
        computed: {
            listings() {
                return this.$store.state.listing.listings
            },
            pages() {
                return Math.ceil(this.$store.state.listing.total / this.itensPerPage)
            }
        },
        props: {
            itensPerPage: {
                type: Number,
                required: true
            },
            currentPage: {
                type: Number,
                required: true
            }
        },
        watch: {
            page() {
                this.fetch()
            }
        },
        methods: {
            fetch() {
                this.$store.dispatch('fetch_listings', {
                    page: this.page,
                    itensPerPage: this.itensPerPage
                })
            }
        }
    }
</script>
