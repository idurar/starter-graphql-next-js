import crudController from '@/backend/controllers/crudController';
import * as schemaType from '@/backend/graphql/generated/schemaType';

import Review from '@/backend/models/Review';

const reviewController = crudController<schemaType.Review>(Review);

export default reviewController;
