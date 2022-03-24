import { gql } from 'apollo-server';
import userTypes from './modules/user/userType';

const graphqlTypes = gql`
  type Mutation {
    addUser(user: UserInput!): User!
    deleteUser(_id: String!): String!
  }

  type Query {
    user(_id: String!): User!
    users: [User!]!
  }
`;

export default [graphqlTypes, userTypes];
