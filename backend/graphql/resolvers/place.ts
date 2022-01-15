import { resolverType } from 'fast-graphql';
import { places } from '@/backend/data';

import * as schema from '@/backend/graphql/generated/schemaType';

const Query = {
  placeList: (parent: any, args: any, ctx: any): schema.Query['placeList'] => {
    return places;
  },

  place: (parent: any, args: any, ctx: any) => {
    return places.find((x) => x.id == args.id);
  },
};

const Mutation = {
  addPlace: (parent: any, args: any, ctx: any) => {
    return { title: 'this is addPlace mutuation' };
  },
};

const resolver: resolverType = { Query, Mutation };

export default resolver;
