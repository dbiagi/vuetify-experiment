<template lang="pug">
    div
        v-layout(row)
            v-flex(v-for="i in 6", xs6, :key="i")
                v-card
                    v-card-text Card {{ i }}

</template>

<script>
    import {teaGenerator} from '@/fixtures/image'

    let generator = teaGenerator()

    export default {
        name: 'module-menu',
        data() {
            return {}
        },
        computed: {
        },
        methods: {
            getTeaImage() {
                return generator.next().value
            }
        }
    }
</script>
