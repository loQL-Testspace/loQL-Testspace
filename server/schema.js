import { gql } from 'apollo-server';

const typeDefs = gql`
  type Human {
    id: ID!
    username: String!
  }

  input NewHumanInput {
    username: String!
  }

  type Query {
    human: Human!

  }

  type Mutation {
    addHuman (input: NewHumanInput!): Human!
  }
`;

export default typeDefs;