export default class ImageFixtures {
    static IMAGE_PATH = '/static/img'

    static TYPES = {
        tea: 7,
        random: 4
    }

    static current = {
        tea: 0,
        random: 0
    }

    static get(type) {
        let i = (ImageFixtures.current[type] % ImageFixtures.TYPES[type])+1

        ImageFixtures.current[type]++

        return ImageFixtures.IMAGE_PATH + '/' + type + '_' + i + '.' + 'jpeg'
    }
}
