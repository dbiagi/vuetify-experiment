import {teaGenerator} from '@/fixtures/image'
import faker from 'faker'

let gen = teaGenerator()

let categories = []

for (let i = 0; i < 6; i++) {
    let title = faker.name.title()
    categories.push({
        id: i+1,
        slug: faker.helpers.slugify(title),
        img: gen.next().value
    })
}

export class CategoryRepository {
    static findAll() {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(categories), 200)
        })
    }
}
