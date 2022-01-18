import { resolverType } from 'fast-graphql';
import { users } from '@/backend/data';
import userController from '@/backend/controllers/userController';
import * as schemaType from '@/backend/graphql/generated/schemaType';

const Query = {
  userList: async (parent: any, args: any, ctx: any) => {
    return await userController.list();
  },

  user: (parent: any, args: any, ctx: any) => {
    return users.find((x) => x._id == args._id);
  },
};

const Mutation = {
  addUser: (parent: any, args: any, ctx: any) => {
    return { name: 'this is addUser mutuation' };
  },
};

const resolver: resolverType = { Query, Mutation };

export default resolver;
