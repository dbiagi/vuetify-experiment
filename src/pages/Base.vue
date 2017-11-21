<template lang="pug">
    div
        search-toolbar
        v-content
            router-view
</template>

<script>
    import SearchToolbar from '../components/SearchToolbar.vue'

    export default {
        created() {
            this.$store.dispatch('fetch_modules')
        },
        components: {SearchToolbar}
    }
</script>
