import {teaGenerator, TOTAL_TEA_IMAGES} from '@/fixtures/image'

let gen = null
const imagePattern = new RegExp('\/img\/tea_([1-' + TOTAL_TEA_IMAGES + '])\.([a-zA-Z]{3,6})')

beforeEach(() => {
    gen = teaGenerator()
})

describe('teaGenerator.next()', () => {
    it('should match the image pattern', () => {
        let image = gen.next().value
        assert.match(image, imagePattern)
    })

    it('should return a tea image numbered from 1 to ' + TOTAL_TEA_IMAGES, () => {
        let counter = 0;

        for (let i = 0; i < 14; i++) {
            let image = gen.next().value

            let matches = image.match(imagePattern)

            counter = matches[1]

            assert(counter <= TOTAL_TEA_IMAGES)
        }
    })
})
