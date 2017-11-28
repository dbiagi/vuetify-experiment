import Vue from 'vue'
import Vuex from 'vuex'
import listing from './listing'
import module from './module'
import category from './category'
import banner from './banner'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        listing,
        category,
        module,
        banner
    }
})
