import crudController from './crudController';

import User from '@/backend/models/User';

const userController = crudController(User);

export default userController;
