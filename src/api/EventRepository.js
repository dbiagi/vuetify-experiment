import faker from 'faker'

let events = []

for (let i = 0; i < 20; i++) {
    events.push({
        id: i+1,
        title: faker.lorem.sentence(faker.random.number({min: 2, max: 4})),
        startAt: faker.date.past(),
        endAt: faker.date.future()
    })
}

export default class EventRepository {
    static findAll(limit = null) {
        return new Promise(r => {
            if(limit !== null)
                return r(events.slice(0, limit))

            r(events)
        })
    }
}
