import { gql } from 'apollo-server';

const typeDefs = gql`
  type Human {
    id: ID!
    username: String!
  }

  input NewHumanInput {
    username: String!
  }

  input HumanQuery {
    id: String!
  }

  type Query {
    human (input: HumanQuery!): Human!
    
  }

  type Mutation {
    addHuman (input: NewHumanInput!): Human!
  }
`;

export default typeDefs;