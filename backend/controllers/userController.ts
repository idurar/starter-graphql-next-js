import crudController from '@/backend/controllers/crudController';
import * as schemaType from '@/backend/graphql/generated/schemaType';

import User from '@/backend/models/User';

const userController = crudController<schemaType.User>(User);

export default userController;
