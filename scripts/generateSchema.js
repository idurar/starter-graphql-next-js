const { generateSchema } = require('fast-graphql');

const inputPath = './backend/graphql/typeDefs/*.gql';
const schemaPath = './backend/graphql/schema.graphql';
const typeDefsPath = './backend/graphql/typeDefs/index.ts';

generateSchema({ inputPath, schemaPath, typeDefsPath });
