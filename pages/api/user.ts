import type { NextApiRequest, NextApiResponse } from 'next';

import connectToDatabase from '@/backend/database/connectToDatabase';

import userController from '@/backend/controllers/userController';
import * as schemaType from '@/backend/graphql/generated/schemaType';

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  await connectToDatabase();
  const args: schemaType.User = { _id: '4G6D7H4GSR' };
  let listResult = await userController.list(args);
  console.log('🚀 ~ file: user.ts ~ line 8 ~ handler ~ User list', listResult);
  return res.status(200).json({
    success: true,
    result: listResult,
  });
}
