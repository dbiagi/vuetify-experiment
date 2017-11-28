import BannerRepository from '@/api/BannerRepository'

describe('BannerRepository.findHomeBanners()', () => {
    it('should return a promise', () => {
        assert.typeOf(BannerRepository.findHomeBanners(), 'Promise')
    })

    it('should return an array', () => {
        BannerRepository.findHomeBanners().then(data => {
            assert.typeOf(data, 'Array')
            assert.isAbove(data.length, 1, data.length + ' is greater than 1')
        })
    })
})
