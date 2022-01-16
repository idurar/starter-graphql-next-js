import type { NextApiRequest, NextApiResponse } from 'next';
import { ApolloServer } from 'apollo-server-micro';

import { createContext } from '@/backend/graphql/context';

import typeDefs from '@/backend/graphql/typeDefs';
import resolvers from '@/backend/graphql/resolvers';

import connectToDatabase from '@/backend/database/connectToDatabase';

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: createContext,
});
const startServer = apolloServer.start();

export default async function graphqlServer({
  req,
  res,
  serverConfig = {},
}: {
  req: NextApiRequest;
  res: NextApiResponse;
  serverConfig?: any;
}) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  if (req.method === 'OPTIONS') {
    res.end();
    return false;
  }

  await connectToDatabase();
  await startServer;
  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res);
}
