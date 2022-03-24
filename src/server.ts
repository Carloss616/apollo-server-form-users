import { ApolloServer } from 'apollo-server';
import * as mongoose from 'mongoose';
import { MONGO, PORT } from './config';
import graphqlTypes from './graphqlTypes';
import resolvers from './resolvers';

const server = new ApolloServer({
  resolvers,
  typeDefs: graphqlTypes,
  debug: true,
});

mongoose.connect(MONGO, {}, (err) => {
  if (err) {
    console.log('Error: ', err);
    process.exit(1);
  }
  console.log(`Connected to mongodb at: ${MONGO}`);

  server.listen(PORT, () => {
    console.log(`🚀 Apollo server ready on http://localhost:${PORT}/graphql`);
    console.log(`⚡️ Playground exposed on /graphql`);
  });
});
