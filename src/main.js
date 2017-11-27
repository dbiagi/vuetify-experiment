// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuetify from 'vuetify'
import router from './router.js'
import store from './store'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify, {
    theme: {
        primary: '#3f51b5',
        secondary: '#b0bec5',
        accent: '#8c9eff',
        error: '#b71c1c'
    }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
window.vue = new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {App}
})
