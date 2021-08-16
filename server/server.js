import { ApolloServer } from 'apollo-server'
import typeDefs  from './schema.js'
import resolvers  from './resolvers.js'
import {models, db}  from './db/index.js'
// const model = require('./db/dummy');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context() {
      const human = db.get('human').value()
      return {models, db, human}
    }
})

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});