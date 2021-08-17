export default {
  Query: {
    human(_, {input}, {models}) {
      console.log(input.id, models);
      // return models.Human.findOne({id: input.id})
      const human = models.Human.findOne({id: input.id});
      const pets = models.Pet.findMany({owner: input.id})
      // console.log("pets", pets);
      return {...human, pets: pets}
    },
    pet(_, {input}, {models}) {
      // console.log(input);
      const pet = models.Pet.findOne({id: input.id})
      const human = models.Human.findOne({id: pet.owner})
      return {...pet, owner: human}
    },
  },
  Mutation: {
    addHuman(_, { input }, { models }) {
      const human = models.Human.create({ username: input.username });
      return human;
    },
  }
};
