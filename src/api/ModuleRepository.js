const modules = [
    {
        slug: 'deals',
        title: 'Deals',
    },
    {
        slug: 'events',
        title: 'Events',
    },
    {
        slug: 'listings',
        title: 'Listings',
    },
]

export default class ModuleRepository {
    static findAll() {
        return new Promise(resolve => {
            setTimeout(() => resolve(modules), 200)
        })
    }
}
