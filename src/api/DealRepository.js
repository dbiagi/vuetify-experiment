import faker from 'faker'

let deals = []

for (let i = 0; i < 20; i++) {
    deals.push({
        id: i+1,
        title: faker.lorem.sentence(faker.random.number({min: 2, max: 3})),
        price: faker.finance.amount(40, 200, 2),
        amount: faker.random.number({min: 5, max: 20}),
        endAt: faker.date.future()
    })
}

export default class DealRepository {
    static findAll(limit = null) {
        return new Promise(r => {
            if(limit !== null)
                return r(deals.slice(0, limit))

            r(deals)
        })
    }
}
