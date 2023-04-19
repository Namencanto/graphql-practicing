const { GraphQLObjectType, GraphQLSchema } = require("graphql");

// Queries
const ClientQueries = require("./queries/clientQueries.js");
const ProjectQueries = require("./queries/projectQueries.js");

// Mutations
const ClientMutations = require("./mutations/ClientMutations.js");
const ProjectMutations = require("./mutations/ProjectMutations.js");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    ...ClientQueries.fields,
    ...ProjectQueries.fields,
  },
});

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    ...ClientMutations.fields,
    ...ProjectMutations.fields,
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation,
});
