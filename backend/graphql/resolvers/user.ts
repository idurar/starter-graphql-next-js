import userController from '@/backend/controllers/userController';
import { resolverType } from 'fast-graphql';
import * as schema from '@/backend/graphql/generated/schemaType';

const Query = {
  async readUser(parent: any, args: any, ctx: any): Promise<schema.Query['readUser']> {
    return await userController().read(args);
  },
  async listUser(parent: any, args: any, ctx: any): Promise<schema.Query['listUser']> {
    return await userController().list(args);
  },
  async searchUser(parent: any, args: any, ctx: any): Promise<schema.Query['searchUser']> {
    return await userController().search(args);
  },
};

const Mutation = {
  async createUser(parent: any, args: any, ctx: any): Promise<schema.Mutation['createUser']> {
    return await userController().create(args);
  },
  async updateUser(parent: any, args: any, ctx: any): Promise<schema.Mutation['updateUser']> {
    return await userController().update(args);
  },
  async deleteUser(parent: any, args: any, ctx: any): Promise<schema.Mutation['deleteUser']> {
    return await userController().delete(args);
  },
};

const resolver: resolverType = { Query, Mutation };

export default resolver;
