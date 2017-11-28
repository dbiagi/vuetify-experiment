import ListingRepository from '@/api/ListingRepository'

export const TYPES = {
    FETCH_FEATURED_LISTINGS: 'FETCH_FEATURED_LISTINGS',
    FETCH_LISTINGS: 'FETCH_LISTINGS',
    FETCH_LISTINGS_COUNT: 'FETCH_LISTINGS_COUNT',
}

const state = {
    featured: [],
    listings: [],
    total: null,
}

const actions = {
    fetch_featured_listings({commit}, params) {
        params = params || {}

        let limit = params.limit || null

        ListingRepository.findFeatured(limit).then(data => {
            commit(TYPES.FETCH_FEATURED_LISTINGS, data)
        })
    },
    fetch_listings_count({commit}) {
        ListingRepository.countAll().then(count => commit(TYPES.FETCH_LISTINGS_COUNT, count))
    },
    fetch_listings({commit}, params) {
        let itensPerPage = params.itensPerPage
        let page = params.page || 1

        ListingRepository.findAll(page, itensPerPage).then(data => {
            commit(TYPES.FETCH_LISTINGS, data)
        })
    }
}

const mutations = {
    [TYPES.FETCH_FEATURED_LISTINGS](state, data) {
        state.featured = data
    },
    [TYPES.FETCH_LISTINGS](state, data) {
        state.listings = data
    },
    [TYPES.FETCH_LISTINGS_COUNT](state, count) {
        state.total = count
    }
}

export default {
    state,
    actions,
    mutations
}
