import reviewController from '@/backend/controllers/reviewController';
import { resolverType } from 'fast-graphql';
import * as schema from '@/backend/graphql/generated/schemaType';

const Query = {
  async readReview(parent: any, args: any, ctx: any): Promise<schema.Query['readReview']> {
    return await reviewController().read(args);
  },
  async listReview(parent: any, args: any, ctx: any): Promise<schema.Query['listReview']> {
    return await reviewController().list(args);
  },
  async searchReview(parent: any, args: any, ctx: any): Promise<schema.Query['searchReview']> {
    return await reviewController().search(args);
  },
};

const Mutation = {
  async createReview(parent: any, args: any, ctx: any): Promise<schema.Mutation['createReview']> {
    return await reviewController().create(args);
  },
  async updateReview(parent: any, args: any, ctx: any): Promise<schema.Mutation['updateReview']> {
    return await reviewController().update(args);
  },
  async deleteReview(parent: any, args: any, ctx: any): Promise<schema.Mutation['deleteReview']> {
    return await reviewController().delete(args);
  },
};

const resolver: resolverType = { Query, Mutation };

export default resolver;
