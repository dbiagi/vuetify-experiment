<template lang="pug">
    v-card
        v-card-media(:src="listing.img", :height="height")
        v-card-title {{ listing.title }}
</template>

<script>
    export default {
        name: 'listing-card',
        data() {
            return {}
        },
        props: {
            listing: {
                required: true,
                type: Object
            },
            height: String
        }
    }
</script>
