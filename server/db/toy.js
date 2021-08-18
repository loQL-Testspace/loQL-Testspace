import nanoid from 'nanoid'

const createToyModel = db => {
    return {
        findMany(filter) {
            return db.get('toy')
                .filter(filter)
                .orderBy(['createdAt'], ['desc'])
                .value()
        },

        findOne(filter) {
            return db.get('toy')
                .find(filter)
                .value()
        },

        create(toy) {
            const newToy = { id: nanoid(), createdAt: Date.now(), ...toy }
            db.get('toy')
                .push(newToy)
                .write()

            return newToy
        }
    }
}

export default createToyModel;