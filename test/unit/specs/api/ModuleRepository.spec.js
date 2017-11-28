import ModuleRepository from '@/api/ModuleRepository'

describe('ModuleRepository.findAll()', () => {
    it('should return a promisse', () => {
        let promise = ModuleRepository.findAll()
        assert.typeOf(promise, 'Promise')
    })

    it('the Promise should resolve to an array', () => {
        return ModuleRepository.findAll()
            .then(data => assert.typeOf(data, 'Array'))
    })

    it('the Promise should resolve to an array of objects containing requried fields', () => {
        return ModuleRepository.findAll()
            .then(data => {
                let module = data.pop()

                let expectedKeys = ['slug', 'title']

                assert.hasAllKeys(module, expectedKeys)
            })
    })
})
