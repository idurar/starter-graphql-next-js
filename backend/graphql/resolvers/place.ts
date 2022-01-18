import { resolverType } from 'fast-graphql';
import { places } from '@/backend/data';

import * as schema from '@/backend/graphql/generated/schemaType';

const Query = {
  placeList: async (parent: any, args: any, ctx: any): Promise<schema.Query['placeList']> => {
    return null;
  },

  place(parent: any, args: any, ctx: any) {
    console.log('🚀 ~ file: place.ts ~ line 12 ~ place ~ ctx', ctx);
    console.log('🚀 ~ file: place.ts ~ line 12 ~ place ~ parent', parent);
    console.log('🚀 ~ file: place.ts ~ line 8 ~ placeList: ~ args', args);
    return places.find((x) => x._id == args._id);
  },
};

const Mutation = {
  placeCreate: (parent: any, args: any, ctx: any) => {
    return { title: 'this is addPlace mutuation' };
  },
};

const resolver: resolverType = { Query, Mutation };

export default resolver;
