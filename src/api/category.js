import {teaGenerator} from '@/fixtures/image'

let gen = teaGenerator()

const allCategories = [
    {
        id: 1,
        slug: 'black_tea',
        title: 'Black Tea',
        img: gen.next().value
    },
    {
        id: 2,
        slug: 'green_tea',
        title: 'Green Tea',
        img: gen.next().value
    },
    {
        id: 3,
        slug: 'indian_tea',
        title: 'Indian Tea',
        img: gen.next().value
    },
    {
        id: 4,
        slug: 'infusion',
        title: 'Infusion',
        img: gen.next().value
    },
    {
        id: 5,
        slug: 'star_anis_tea',
        title: 'Star Anis Tea',
        img: gen.next().value
    },
    {
        id: 6,
        slug: 'sweet_tea',
        title: 'Sweet Tea',
        img: gen.next().value
    }
]

export class CategoryRepository {
    static findAll() {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(allCategories), 200)
        })
    }
}
