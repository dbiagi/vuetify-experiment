<template lang="pug">
    v-container
        v-layout(row, wrap)
            v-flex(xs12)
                h1 Home Page
            v-flex(xs12)
                module-menu
</template>

<script>
    import ModuleMenu from '../components/ModuleMenu.vue'

    export default {
        components: {ModuleMenu}
    }
</script>
