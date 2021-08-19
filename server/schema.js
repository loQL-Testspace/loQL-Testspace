import { gql } from 'apollo-server';

const typeDefs = gql`
  type Human {
    id: ID!
    name: String!
    pets: [Pet!]
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
    toys: [Toy!]
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

  type Toy {
    id: ID!
    name: String!
    price: Int!
    weight: Int!
    color: String!
    pets: [Pet!]
  }

  input ToyQuery {
    id: ID!
  }

  type Query {
    human (input: HumanQuery!): Human!
    humans: [Human!]!
    pet (input: PetQuery!): Pet!
    toy (input: ToyQuery!): Toy!
  }

  type Mutation {
    addHuman (input: NewHumanInput!): Human!
  }
`


export default typeDefs;