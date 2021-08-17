import { gql } from 'apollo-server';

const typeDefs = gql`
  type Human {
    id: ID!
    username: String!
    pets: [Pet]
  }

  input NewHumanInput {
    username: String!
  }

  input HumanQuery {
    id: String!
  }

  type Pet {
    id: ID!
    name: String!
    type: String!
    owner: Human!
  }

  input PetQuery {
    id: String!
  }

  input NewPetInput {
    name: String!
    type: String!
    owner: String!
  }

  type Query {
    human (input: HumanQuery!): Human!
    pet (input: PetQuery!): Pet!
  }

  type Mutation {
    addHuman (input: NewHumanInput!): Human!
  }
`;

export default typeDefs;