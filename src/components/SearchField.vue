<template lang="pug">
    v-text-field(
        placeholder="Search ...",
        append-icon="search"
    )
</template>

<script>
    export default {
        name: 'search-field',
        methods: {
            search() {
                console.log('Im searching bitch')
            }
        }
    }
</script>
