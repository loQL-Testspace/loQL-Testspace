export default {
  Query: {
    humans(_, __, { models }) {
      return models.Human.findMany({});
    },

    human(_, { input }, { models }) {
      const human = models.Human.findOne({ id: input.id });
      const allPets = [];
      for (let i = 0; i < human.pets.length; i++) {
        const pet = models.Pet.findOne({ id: human.pets[i] });
        allPets.push(pet);
      }

      return { ...human, pets: allPets };
    },

    pet(_, { input }, { models }) {
      const pet = models.Pet.findOne({ id: input.id });
      const human = models.Human.findOne({ id: pet.owner });
      const allToys = [];
      for (let i = 0; i < pet.toys.length; i++) {
        const toy = models.Toy.findOne({ id: pet.toys[i] });
        allToys.push(toy);
      }
      return { ...pet, owner: human, toys: allToys };
    },

    toy(_, { input }, { models }) {
      const toy = models.Toy.findOne({ id: input.id });
      const allPets = [];
      for (let i = 0; i < toy.pets.length; i++) {
        const pet = models.Pet.findOne({ id: toy.pets[i] });
        allPets.push(pet);
      }
      return { ...toy, pets: allPets };
    },
  },
  Mutation: {
    addHuman(_, { input }, { models }) {
      const human = models.Human.create({ username: input.name });
      return human;
    },
  },
};
