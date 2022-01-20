import placeController from '@/backend/controllers/placeController';
import { resolverType } from 'fast-graphql';
import * as schema from '@/backend/graphql/generated/schemaType';

const Query = {
  async readPlace(parent: any, args: any, ctx: any): Promise<schema.Query['readPlace']> {
    return await placeController().read(args);
  },
  async listPlace(parent: any, args: any, ctx: any): Promise<schema.Query['listPlace']> {
    return await placeController().list(args);
  },
  async searchPlace(parent: any, args: any, ctx: any): Promise<schema.Query['searchPlace']> {
    return await placeController().search(args);
  },
};

const Mutation = {
  async createPlace(parent: any, args: any, ctx: any): Promise<schema.Mutation['createPlace']> {
    return await placeController().create(args);
  },
  async updatePlace(parent: any, args: any, ctx: any): Promise<schema.Mutation['updatePlace']> {
    return await placeController().update(args);
  },
  async deletePlace(parent: any, args: any, ctx: any): Promise<schema.Mutation['deletePlace']> {
    return await placeController().delete(args);
  },
};

const resolver: resolverType = { Query, Mutation };

export default resolver;
