import { resolverType } from 'fast-graphql';
import { reviews } from '@/backend/data';

const Query = {
  reviewByUser: (parent: any, args: any, ctx: any) => {
    return reviews.filter((x) => x.id == args.id);
  },
};

const Mutation = {
  addReview: (parent: any, args: any, ctx: any) => {
    return { name: 'this is addReview mutuation' };
  },
};

const resolver: resolverType = { Query, Mutation };

export default resolver;
