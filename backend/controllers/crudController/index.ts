import { Model } from 'mongoose';
import crudMethods from './crudMethods';

export interface edgesType<T> {
  edges: T[] | [];
  pagination: {
    page: number;
    pages: number;
    count: number;
  };
}
export interface crudControllerType<T> {
  create: (args: T) => Promise<T | null>;
  read: (args: T) => Promise<T | null>;
  update: (args: T) => Promise<T | null>;
  delete: (args: T) => Promise<T | null>;
  list: (args: T) => Promise<edgesType<T>>;
}

function crudController<T>(Model: Model<T>) {
  const _crudMethods = crudMethods<T>(Model);

  let methods: crudControllerType<T> = {
    create: (args) => {
      return _crudMethods.create(args);
    },

    read: (args) => {
      return _crudMethods.read(args);
    },

    update: (args) => {
      return _crudMethods.update(args);
    },

    delete: (args) => {
      return _crudMethods.delete(args);
    },

    list: (args) => {
      return _crudMethods.list(args);
    },
    // search : async (args) => {
    // return _crudMethods.search( args);
    // },
  };

  return methods;
}

export default crudController;
