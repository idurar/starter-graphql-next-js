const { generateSchema } = require('fast-graphql');

const inputPath = './backend/graphql/typeDefs/*.gql';
const outPath = './backend/graphql/schema.graphql';

generateSchema({ inputPath, outPath });
