import { mergeSchemas } from 'fast-graphql';

const pathfiles = './backend/graphql/typeDefs/*.gql';

const mergedSchemas = mergeSchemas({ pathfiles });

export default mergedSchemas;
