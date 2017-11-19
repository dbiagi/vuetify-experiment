const IMAGE_PATH = '/static/img'

export const TOTAL_TEA_IMAGES = 7;

/**
 * Tea image generator.
 */
export function *teaGenerator() {
    let current = 0
    const BASE = 'tea_'
    const EXTENSION = 'jpeg'

    while(true) {
        let counter = (current % TOTAL_TEA_IMAGES) + 1

        yield IMAGE_PATH + '/' + BASE + counter + '.' + EXTENSION

        current++
    }
}
