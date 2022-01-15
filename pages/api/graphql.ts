import type { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from '@/backend/database/connectToDatabase';
import graphqlServer from '@/backend/graphql/server';

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  await connectToDatabase();
  await graphqlServer({ req, res });
}

export const config = {
  api: {
    bodyParser: false,
  },
};
