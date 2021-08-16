export default {
  Query: {
    human(_, {input}, {models}) {
      return models.human.findMany(input || {})
    },
    human(_, {id}, {models}) {
      return models.human.findOne({id})
    }
  }
};
