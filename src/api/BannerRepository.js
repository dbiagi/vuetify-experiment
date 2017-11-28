import ImageFixtures from '../fixtures/ImageFixtures'

let banners = []

for (let i = 0; i < 4; i++) {
    banners.push({
        id: i+1,
        img: ImageFixtures.get('random')
    })
}

export default class BannerRepository {
    static findHomeBanners() {
        return new Promise(r => {
            setTimeout(() => {
                r(banners)
            }, 200)
        })
    }
}
