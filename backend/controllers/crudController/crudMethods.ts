import { Model } from 'mongoose';

interface edgesType<T> {
  edges: T[] | [];
  pagination: {
    page: number;
    pages: number;
    count: number;
  };
}

interface crudMethodsType<T> {
  read: (args: any) => Promise<T | null>;
  create: (args: any) => Promise<T | null>;
  update: (args: any) => Promise<T | null>;
  delete: (args: any) => Promise<T | null>;
  list: (args: any) => Promise<edgesType<T>>;
}

function crudMethods<T>(ModelEntity: Model<T>) {
  let methods: crudMethodsType<T> = {
    read: async (args) => {
      try {
        // Find document by id
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

    create: async (args) => {
      try {
        // Creating a new document in the collection
        const result = await ModelEntity.create(args?.body);
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
      const page = parseInt(args?.page) || 1;
      const limit = parseInt(args?.limit) || 10;
      const skip = page * limit - limit;
      try {
        //  Query the database for a list of all results
        const resultsPromise = ModelEntity.find().skip(skip).limit(limit).sort({ created: 'desc' });
        // Counting the total documents
        const countPromise = ModelEntity.count();
        // Resolving both promises
        const [result, count] = await Promise.all([resultsPromise, countPromise]);
        console.log('🚀 ~ file: crudMethods.js ~ line 71 ~ list: ~ result', result);
        console.log('🚀 ~ file: crudMethods.js ~ line 71 ~ list: ~ count', count);
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
  };

  return methods;
}

export default crudMethods;
