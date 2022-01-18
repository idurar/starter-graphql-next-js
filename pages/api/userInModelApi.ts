import type { NextApiRequest, NextApiResponse } from 'next';

import connectToDatabase from '@/backend/database/connectToDatabase';
import User from '../../backend/models/User';
import crudController from '@/backend/controllers/crudController';

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  await connectToDatabase();

  const userController = crudController(User);

  let listResult = await userController.list();
  console.log('🚀 ~ file: user.ts ~ line 8 ~ handler ~ User list', listResult);
  return res.status(200).json({
    success: true,
    result: listResult,
  });
}
