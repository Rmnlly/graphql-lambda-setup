const { ApolloServer } = require("apollo-server-lambda");
const ProductAPI = require("./datasources/product");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");

import SkillsAPI from "./datasources/skills";

const server = new ApolloServer({
  context: async ({ event }) => {
    // In a lambda we don't have the "req" object, instead we have event and context
    // Event can offer us the http headers, http method, body, path etc
    // Context offers us the current lambda context, time remaining etc
    const auth = (event.headers && event.headers.authorization) || "";

    return auth ? { user: true } : { user: null };
  },
  typeDefs,
  resolvers,
  dataSources: () => ({
    ProductAPI: new ProductAPI(),
    SkillsAPI: new SkillsAPI()
  }),
  introspection: true,
  playground: true
});

exports.handler = server.createHandler({
  cors: {
    origin: "*",
    credentials: true
  }
});
