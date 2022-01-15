import { combineResolvers, resolverType } from 'fast-graphql';

import user from './user';
import place from './place';
import review from './review';

const resolvers: resolverType[] = [place, user, review];

const cominedResolvers = combineResolvers({ resolvers });

export default cominedResolvers;
