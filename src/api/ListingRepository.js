import faker from 'faker'
import ImageFixtures from '../fixtures/ImageFixtures'

let listings = []

for (let i = 0; i < 20; i++) {
    listings.push({
        id: i+1,
        title: faker.lorem.sentence(faker.random.number({min: 1, max: 3})),
        img: ImageFixtures.get('tea')
    })
}

export default class ListingRepository {
    static findFeatured(limit) {
        return new Promise(r => r(listings.slice(0, limit)))
    }

    static findAll(page, itensPerPage) {
        return new Promise(r => {
            if (page > 0 && itensPerPage !== null) {
                let offset = (page-1) * itensPerPage

                return r(listings.slice(offset, offset+itensPerPage))
            }

            r(listings)
        })
    }

    static countAll () {
        return new Promise(r => {
            return r(listings.length)
        })
    }
}
