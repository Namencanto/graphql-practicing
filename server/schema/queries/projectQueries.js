const { GraphQLID, GraphQLList } = require("graphql");

const ProjectType = require("../types/projectType.js");

// Mongoose model
const Project = require("../../models/Project.js");

const ProjectQueries = {
  fields: {
    projects: {
      type: new GraphQLList(ProjectType),
      resolve(parent, args) {
        return Project.find();
      },
    },
    project: {
      type: ProjectType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Project.findById(args.id);
      },
    },
  },
};

module.exports = ProjectQueries;
