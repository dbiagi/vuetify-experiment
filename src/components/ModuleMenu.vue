<template lang="pug">
    div
        v-layout(row, wrap)
            v-flex(v-for="i in 6", xs5, mr-3, mb-3 :key="i")
                v-card
                    v-card-media(:src="getTeaImage()", height="200px")


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
