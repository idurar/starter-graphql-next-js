import { resolverType } from 'fast-graphql';
import { users } from '@/backend/data';
import * as schemaType from '@/backend/graphql/generated/schemaType';

const Query = {
  userList: (parent: any, args: any, ctx: any) => {
    return users;
  },

  user: (parent: any, args: any, ctx: any) => {
    return users.find((x) => x.id == args.id);
  },
};

const Mutation = {
  addUser: (parent: any, args: any, ctx: any) => {
    return { name: 'this is addUser mutuation' };
  },
};

const resolver: resolverType = { Query, Mutation };

export default resolver;
