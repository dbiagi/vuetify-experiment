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

        },
        components: {SearchToolbar}
    }
</script>
