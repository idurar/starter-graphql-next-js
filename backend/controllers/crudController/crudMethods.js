const crudMethods = {
  read: async (Model, args) => {
    try {
      // Find document by id
      const result = await Model.findOne({ _id: args?._id });
      if (!result) {
        return null;
      } else {
        return result;
      }
    } catch (err) {
      return null;
    }
  },

  create: async (Model, args) => {
    try {
      // Creating a new document in the collection
      return await new Model(args?.body).save();
    } catch (err) {
      return null;
    }
  },

  update: async (Model, args) => {
    try {
      // Find document by id and updates with the argsuired fields
      const result = await Model.findOneAndUpdate({ _id: args?._id }, args?.body, {
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

  delete: async (Model, args) => {
    try {
      // Find the document by id and delete it
      const result = await Model.findOneAndDelete({ _id: args?._id }).exec();
      if (!result) {
        return null;
      } else {
        return result;
      }
    } catch (err) {
      return null;
    }
  },

  list: async (Model, args) => {
    try {
      const result = await Model.find();
      console.log('🚀 ~ file: crudMethods.js ~ line 58 ~ list: ~ async crud list', result);
      return result;
    } catch (err) {
      return null;
    }

    //   const page = parseInt(args?.page) || 1;
    //   const limit = parseInt(args?.limit) || 10;
    //   const skip = page * limit - limit;
    //   try {
    //     //  Query the database for a list of all results
    //     const resultsPromise = Model.find()
    //       .skip(skip)
    //       .limit(limit)
    //       .sort({ created: 'desc' })
    //       .populate();
    //     // Counting the total documents
    //     const countPromise = Model.count();
    //     // Resolving both promises
    //     const [result, count] = await Promise.all([resultsPromise, countPromise]);
    //     console.log('🚀 ~ file: crudMethods.js ~ line 71 ~ list: ~ result', result);
    //     console.log('🚀 ~ file: crudMethods.js ~ line 71 ~ list: ~ count', count);
    //     // Calculating total pages
    //     const pages = Math.ceil(count / limit);
    //     // Getting Pagination Object
    //     const pagination = { page, pages, count };
    //     // returning result
    //     if (count > 0) {
    //       return {
    //         edges: result,
    //         pagination,
    //       };
    //     } else {
    //       return {
    //         edges: [],
    //         pagination,
    //       };
    //     }
    //   } catch {
    //     return {
    //       edges: [],
    //       pagination: {
    //         page: 0,
    //         pages: 0,
    //         count: 0,
    //       },
    //     };
    //   }
  },

  // search : async (Model, args, res) => {
  //   // console.log(args?.fields)
  //   if (args?.q === undefined || args?.q === '' || args?.q === ' ') {
  //     return res
  //       .status(202)
  //       .json({
  //         success: false,
  //         result: [],
  //         message: 'No document found by this argsuest',
  //       })
  //       .end();
  //   }
  //   const fieldsArray = args?.fields ? args?.fields.split(',') : ['name', 'surname', 'birthday'];

  //   const fields = { $or: [] };

  //   for (const field of fieldsArray) {
  //     fields.$or.push({ [field]: { $regex: new RegExp(args?.q, 'i') } });
  //   }
  //   // console.log(fields)
  //   try {
  //     let results = await Model.find(fields).where('removed', false).sort({ name: 'asc' }).limit(10);

  //     if (results.length >= 1) {
  //       return res.status(200).json({
  //         success: true,
  //         result: results,
  //         message: 'Successfully found all documents',
  //       });
  //     } else {
  //       return res
  //         .status(202)
  //         .json({
  //           success: false,
  //           result: [],
  //           message: 'No document found by this argsuest',
  //         })
  //         .end();
  //     }
  //   } catch (err) {
  //     return res.status(500).json({
  //       success: false,
  //       result: null,
  //       message: 'Oops there is an Error',
  //       error: err,
  //     });
  //   }
  // },

  // /**
  //  *  Getting documents with filters
  //  *  @param {Object} args
  //  *  @returns {Array} List of Documents
  //  */

  // filter : async (Model, args, res) => {
  //   try {
  //     if (args?.filter === undefined || args?.equal === undefined) {
  //       return res.status(403).json({
  //         success: false,
  //         result: null,
  //         message: 'filter not provided correctly',
  //       });
  //     }
  //     const result = await Model.find().where(args?.filter).equals(args?.equal);
  //     return res.status(200).json({
  //       success: true,
  //       result,
  //       message: 'Successfully found all documents where equal to : ' + args?.equal,
  //     });
  //   } catch (err) {
  //     return res.status(500).json({
  //       success: false,
  //       result: null,
  //       message: 'Oops there is an Error',
  //       error: err,
  //     });
  //   }
  // },
  // status : async (Model, args, res) => {
  //   try {
  //     if (args?.enabled == 'true' || args?.enabled == 'false') {
  //       let updates = {
  //         enabled: args?.enabled,
  //       };
  //       // Find the document by id and delete it
  //       const result = await Model.findOneAndUpdate(
  //         { _id: args?._id },
  //         { $set: updates },
  //         {
  //           new: true, // return the new result instead of the old one
  //         }
  //       ).exec();
  //       // If no results found, return document not found
  //       if (!result) {
  //         return res.status(404).json({
  //           success: false,
  //           result: null,
  //           message: 'No document found by this id: ' + args?._id,
  //         });
  //       } else {
  //         return res.status(200).json({
  //           success: true,
  //           result,
  //           message: 'Successfully update status of this document by id: ' + args?._id,
  //         });
  //       }
  //     } else {
  //       return res
  //         .status(202)
  //         .json({
  //           success: false,
  //           result: [],
  //           message: "couldn't change admin status by this argsuest",
  //         })
  //         .end();
  //     }
  //   } catch (err) {
  //     return res.status(500).json({
  //       success: false,
  //       result: null,
  //       message: 'Oops there is an Error',
  //       error: err,
  //     });
  //   }
  // }
};

export default crudMethods;
