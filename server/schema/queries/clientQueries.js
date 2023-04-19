const { GraphQLID, GraphQLList } = require("graphql");

const ClientType = require("../types/clientType.js");

// Mongoose model
const Client = require("../../models/Client.js");

const ClientQueries = {
  fields: {
    clients: {
      type: new GraphQLList(ClientType),
      resolve(parent, args) {
        return Client.find();
      },
    },
    client: {
      type: ClientType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Client.findById(args.id);
      },
    },
  },
};

module.exports = ClientQueries;
