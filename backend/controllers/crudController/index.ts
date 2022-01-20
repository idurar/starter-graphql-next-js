import { Model } from 'mongoose';
import { crudControllerType } from './crudControllerType';
import crudMethods from './crudMethods';

function crudController<T>(Model: Model<T>) {
  const _crudMethods = crudMethods<T>(Model);

  let methods: crudControllerType<T> = {
    create: (args) => _crudMethods.create(args),
    read: (args) => _crudMethods.read(args),
    update: (args) => _crudMethods.update(args),
    delete: (args) => _crudMethods.delete(args),
    list: (args) => _crudMethods.list(args),
    search: (args) => _crudMethods.search(args),
  };

  return methods;
}

export type { crudControllerType };
export default crudController;
