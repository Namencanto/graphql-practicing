const express = require("express");
const colors = require("colors");
const { graphqlHTTP } = require("express-graphql");
require("dotenv").config();
const schema = require("./schema/schema.js");
const port = process.env.PORT || 5000;
const connectDB = require("./config/db.js");
const app = express();

// Connect to database
connectDB();

const root = {
  hello: () => {
    return "Hello world!";
  },
};

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(port, console.log(`Running a GraphQL API server at ${port} port`));
