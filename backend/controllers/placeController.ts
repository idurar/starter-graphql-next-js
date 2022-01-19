import crudController from '@/backend/controllers/crudController';
import * as schemaType from '@/backend/graphql/generated/schemaType';

import Place from '@/backend/models/Place';

const placeController = crudController<schemaType.Place>(Place);

export default placeController;
