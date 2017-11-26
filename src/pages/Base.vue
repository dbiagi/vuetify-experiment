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
            Promise.all([
                this.$store.dispatch('fetch_modules'),
            ]).then(e => console.log('All loaded'))
        },
        components: {SearchToolbar}
    }
</script>
