import type { NextApiRequest, NextApiResponse } from 'next';

// import userController from '@/backend/controllers/userController';
import connectToDatabase from '@/backend/database/connectToDatabase';
import User from '../../backend/models/User';

const methods = require('@/backend/controllers/crudController');

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  await connectToDatabase();

  // const userController = methods.crudController(User);
  // const { list } = userController;
  const result = await User.find();
  console.log('🚀 ~ file: user.ts ~ line 8 ~ handler ~ User list', result);
  return res.status(200).json({
    success: true,
    result,
  });
}
