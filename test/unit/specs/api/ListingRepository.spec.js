import ListingRepository from '@/api/ListingRepository'

describe('ListingRepository.findAll()', () => {
    it('should return a promise', () => {
        assert.typeOf(ListingRepository.findAll(), 'Promise')
    })

    it('should return a limited result', () => {
        return ListingRepository.findAll(1, 10).then(data => {
            assert.isTrue(data.length === 10, 'data length should be equals 10')
        })
    })
})

describe('ListingRepository.countAll()', () => {
    it('should return a number', () => {
        ListingRepository.countAll().then(count => assert.typeOf(count, 'Number'))
    })
})
