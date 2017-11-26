const modules = [
    {
        slug: 'deals',
        title: 'Deals',
        img: '/static/img/giftbox.jpeg'
    },
    {
        slug: 'events',
        title: 'Events',
        img: '/static/img/calendar.jpeg'
    },
    {
        slug: 'listings',
        title: 'Listings',
        img: '/static/img/buildings.jpeg'
    },
]

export default class ModuleRepository {
    static findAll() {
        return new Promise(resolve => {
            setTimeout(() => resolve(modules), 200)
        })
    }
}
