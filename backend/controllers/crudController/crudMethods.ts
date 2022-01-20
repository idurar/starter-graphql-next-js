import { Model } from 'mongoose';

import { crudControllerType, listArgsType } from './crudControllerType';

function crudMethods<T>(ModelEntity: Model<T>) {
  let methods: crudControllerType<T> = {
    create: async (args) => {
      try {
        // Creating a new document in the collection
        if (!args?.body) {
          return null;
        }
        const result: any = await new ModelEntity(args?.body).save();
        if (!result) {
          return null;
        } else {
          return result;
        }
      } catch (err) {
        return null;
      }
    },

    read: async (args) => {
      try {
        // Find document by id
        if (!args?._id) {
          return null;
        }
        const result = await ModelEntity.findOne({ _id: args?._id });
        if (!result) {
          return null;
        } else {
          return result;
        }
      } catch (err) {
        return null;
      }
    },

    update: async (args) => {
      try {
        if (!args?._id || !args?.body) {
          return null;
        }
        // Find document by id and updates with the argsuired fields
        const result = await ModelEntity.findOneAndUpdate({ _id: args?._id }, args?.body, {
          new: true, // return the new result instead of the old one
          runValidators: true,
        }).exec();
        if (!result) {
          return null;
        } else {
          return result;
        }
      } catch (err) {
        return null;
      }
    },

    delete: async (args) => {
      try {
        if (!args?._id) {
          return null;
        }
        // Find the document by id and delete it
        const result = await ModelEntity.findOneAndDelete({ _id: args?._id }).exec();
        if (!result) {
          return null;
        } else {
          return result;
        }
      } catch (err) {
        return null;
      }
    },

    list: async (args) => {
      try {
        const page = parseInt(`${args?.page}`) || 1;
        const limit = parseInt(`${args?.limit}`) || 10;
        const sortBy = args?.sortBy || 'created';
        const sortOrder: listArgsType['sortOrder'] = args?.sortOrder || 'desc';

        const skip = page * limit - limit;
        //  Query the database for a list of all results
        const resultsPromise = ModelEntity.find()
          .skip(skip)
          .limit(limit)
          .sort({ [sortBy]: sortOrder });
        // Counting the total documents
        const countPromise = ModelEntity.count();
        // Resolving both promises
        const [result, count] = await Promise.all([resultsPromise, countPromise]);

        // Calculating total pages
        const pages = Math.ceil(count / limit);
        // Getting Pagination Object
        const pagination = { page, pages, count };
        // returning result
        if (count > 0) {
          return {
            edges: result,
            pagination,
          };
        } else {
          return {
            edges: [],
            pagination,
          };
        }
      } catch {
        return {
          edges: [],
          pagination: {
            page: 0,
            pages: 0,
            count: 0,
          },
        };
      }
    },

    search: async (args) => {
      try {
        if (args?.query === undefined || args?.query.trim() === '') {
          return [];
        }

        const limit = parseInt(`${args?.limit}`) || 10;

        const fieldsArray = args?.fields?.split(',') || [];

        const fields: any = { $or: [] };

        for (const field of fieldsArray) {
          fields.$or.push({ [field]: { $regex: new RegExp(args?.query, 'i') } });
        }

        let results = await ModelEntity.find(fields).limit(limit);

        if (results.length >= 1) {
          return results;
        } else {
          return [];
        }
      } catch {
        return [];
      }
    },
  };

  return methods;
}

export default crudMethods;
