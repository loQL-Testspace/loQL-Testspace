import nanoid from 'nanoid'

const createHumanModel = db => {
  return {
      findMany(filter) {
        return db.get('human')
          .filter(filter)
          .orderBy(['createdAt'], ['desc'])
          .value()
      },
  
      findOne(filter) {
        return db.get('human')
          .find(filter)
          .value()
      },
  
      create(human) {
        const newHuman = {id: nanoid(), createdAt: Date.now(), ...human}
        
        db.get('human')
          .push(newHuman) 
          .write()
  
        return newHuman
      }
    }
  }

export default createHumanModel;