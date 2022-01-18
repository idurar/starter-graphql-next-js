import type { NextApiRequest, NextApiResponse } from 'next';

import connectToDatabase from '@/backend/database/connectToDatabase';

import userController from '@/backend/controllers/userController';

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  await connectToDatabase();

  let listResult = await userController.list();
  console.log('🚀 ~ file: user.ts ~ line 8 ~ handler ~ User list', listResult);
  return res.status(200).json({
    success: true,
    result: listResult,
  });
}
