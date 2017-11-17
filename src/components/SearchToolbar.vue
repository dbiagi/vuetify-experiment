<template lang="pug">
    v-toolbar
        v-toolbar-side-icon
            v-icon business
        v-toolbar-title {{ application }}
        v-spacer
        search-field
</template>

<script>
    import SearchField from './SearchField.vue'

    export default {
        name: 'search-toolbar',
        components: {SearchField},
        data() {
            return {
                application: 'Business Finder'
            }
        }
    }
</script>
