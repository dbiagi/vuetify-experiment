import DealRepository from '@/api/DealRepository'

describe('DealRepository.findAll()', () => {
    it('should return a promise', () => {
        assert.typeOf(DealRepository.findAll(), 'Promise')
    })

    it('should return a limited result', () => {
        let limit = 10
        return DealRepository.findAll(limit).then(data => {
            assert(data.length === limit)
        })
    })
})
