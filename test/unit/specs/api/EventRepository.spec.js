import EventRepository from '@/api/EventRepository'

describe('EventRepository.findAll()', () => {
    it('should return a promise', () => {
        assert.typeOf(EventRepository.findAll(), 'Promise')
    })

    it('should return a limited result', () => {
        return EventRepository.findAll(10).then(data => {
            assert(data.length === 10)
        })
    })
})
