import crudController from '@/backend/controllers/crudController';
import * as schemaType from '@/backend/graphql/generated/schemaType';

import Place from '@/backend/models/Place';

function placeController() {
  return crudController<schemaType.Place>(Place);
}

export default placeController;
