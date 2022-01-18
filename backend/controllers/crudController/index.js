import crudMethods from './crudMethods';

const crudController = (Model) => {
  let methods = {};

  methods.create = (args) => {
    return crudMethods.create(Model, args);
  };

  methods.read = (args) => {
    return crudMethods.read(Model, args);
  };

  methods.update = (args) => {
    return crudMethods.update(Model, args);
  };

  methods.delete = (args) => {
    return crudMethods.delete(Model, args);
  };

  methods.list = (args) => {
    return crudMethods.list(Model, args);
  };

  // methods.search = async (args) => {
  //   crudMethods.search(Model, args);
  // };

  return methods;
};

export default crudController;
