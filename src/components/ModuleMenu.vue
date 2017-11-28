<template lang="pug">
    v-container(fluid, grid-list-md)
        v-layout(row, wrap, justify-space-between)
            v-flex(v-for="module in modules", md4, xs12, sm6, :key="module.slug")
                router-link(:to="{name: module.slug}")
                    v-card
                        v-card-title {{ module.title }}
</template>

<script>
    export default {
        name: 'module-menu',
        data() {
            return {
                height: '200px'
            }
        },
        computed: {
            modules() {
                return this.$store.state.module.modules
            }
        },
        methods: {}
    }
</script>
