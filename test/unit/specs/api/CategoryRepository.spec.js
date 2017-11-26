import {CategoryRepository} from '@/api/CategoryRepository'

describe('CategoryRepository.findAll()', () => {
    it('should return a Promise', () => {
        let promise = CategoryRepository.findAll()
        assert.typeOf(promise, 'Promise')
    })

    it('the Promise should resolve to an array', () => {
        return CategoryRepository.findAll()
            .then(data => assert.typeOf(data, 'Array'))
    })
})
