import { gql } from 'apollo-server';

const typeDefs = gql`
  type Human {
    id: ID!
    name: String!
    pets: [Pet]!
    gender: String!
    hair: String!
    favoriteNum: Int!
    alive: Boolean!
    createdAt: Int!
  }
  
  input NewHumanInput {
    id: ID
    name: String
    gender: String
    hair: String
    favoriteNum: Int
    alive: Boolean
    createdAt: Int
  }

  input HumanQuery {
    id: String!
  }

  type Pet {
    id: ID!
    name: String!
    type: String!
    owner: Human!
    createdAt: Int!
  }

  input PetQuery {
    id: ID!
  }

  input NewPetInput {
    id: String!
    name: String!
    type: String!
    owner: String!
    createdAt: Int!
  }

  type Query {
    human (input: HumanQuery!): Human!
    pet (input: PetQuery!): Pet!
  }

  type Mutation {
    addHuman (input: NewHumanInput!): Human!
  }
`


export default typeDefs;