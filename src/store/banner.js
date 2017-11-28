import BannerRepository from '../api/BannerRepository'

export const TYPES = {
    FETCH_HOME_BANNERS: 'FETCH_HOME_BANNERS'
}

const state = {
    home: []
}

const actions = {
    fetch_home_banners({commit}) {
        BannerRepository.findHomeBanners().then(data => {
            commit(TYPES.FETCH_HOME_BANNERS, data)
        })
    }
}

const mutations = {
    [TYPES.FETCH_HOME_BANNERS](state, data) {
        state.home = data
    }
}

export default {
    state,
    actions,
    mutations
}
