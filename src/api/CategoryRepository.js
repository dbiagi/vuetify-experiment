import ImageFixtures from '../fixtures/ImageFixtures'
import faker from 'faker'

let categories = []

for (let i = 0; i < 6; i++) {
    let title = faker.name.title()
    categories.push({
        id: i+1,
        slug: faker.helpers.slugify(title),
        img: ImageFixtures.get('tea')
    })
}

export class CategoryRepository {
    static findAll() {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(categories), 200)
        })
    }
}
