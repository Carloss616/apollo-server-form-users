import { gql } from 'apollo-server';

export default gql`
  input UserInput {
    firstName: String
    lastName: String
    email: String
    note: String
  }
  type User {
    _id: String
    firstName: String
    lastName: String
    email: String
    note: String
  }
`;
