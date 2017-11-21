<template lang="pug">
    div
        v-layout(row, wrap)
            v-flex(v-for="module in modules", md2, mr-3, mb-3, :key="module.slug")
                router-link(:to="{name:'home'}")
                    v-card
                        v-card-media(:src="module.img", height="200px")
                        v-card-title {{ module.title }}
</template>

<script>
    export default {
        name: 'module-menu',
        data() {
            return {}
        },
        computed: {
            modules() {
                return this.$store.state.module.modules
            }
        },
        methods: {}
    }
</script>
