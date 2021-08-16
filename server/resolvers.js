export default {
  Query: {
    human(_, args, {models}) {
      console.log(args, models);
      return models.Human.findOne(args)
    }
  }
};
