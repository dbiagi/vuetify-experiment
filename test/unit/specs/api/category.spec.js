import {CategoryRepository} from '@/api/category'

describe('CategoryRepository.findAll()', () => {
    it('should return a Promise', () => {
        let promise = CategoryRepository.findAll()
        assert.typeOf(promise, 'Promise')
    })

    it('the Promise should resolve to an array', () => {
        return CategoryRepository.findAll()
            .then(data => assert.typeOf(data, 'Array'))
    })

    it('the Promise should resolve to an array of objects containing requried fields', () => {
        return CategoryRepository.findAll()
            .then(data => {
                let category = data.pop()

                let expectedKeys = ['id', 'slug', 'title', 'img']

                assert.hasAllKeys(category, expectedKeys)
            })
    })
})
