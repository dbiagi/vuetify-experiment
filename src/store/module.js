import ModuleRepository from '@/api/module'

export const TYPES = {
    FETCH_MODULES: 'FETCH_MODULES'
}

const state = {
    modules: []
}

const actions = {
    fetch_modules({commit}) {
        ModuleRepository.findAll().then(modules => commit(TYPES.FETCH_MODULES, modules))
    }
}

const mutations = {
    [TYPES.FETCH_MODULES](state, data) {
        console.log(state, data)
        state.modules = data
    }
}

export default {
    state,
    actions,
    mutations
}
