import ImageFixtures from '../../../../src/fixtures/ImageFixtures'

const pattern = new RegExp('\/img\/([A-Za-z0-9]+)_([1-9]+)\.([a-zA-Z]{3,6})')

describe('ImageFixtures.get()', () => {
    it('should match random image pattern', () => {
        let image = ImageFixtures.get('random')
        assert.match(image, pattern, image + ' should match the pattern ' + pattern)
    })

    it('should circle through image counter', () => {
        for (let type in ImageFixtures.TYPES) {
            if(ImageFixtures.TYPES.hasOwnProperty(type)) {
                for (let i = 0; i < ImageFixtures.TYPES[type]*2; i++) {
                    let image = ImageFixtures.get(type)

                    assert.match(image, pattern, image + ' should match the pattern ' + pattern)
                }
            }
        }
    })
})
