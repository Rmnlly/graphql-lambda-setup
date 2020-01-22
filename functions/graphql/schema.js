const { gql } = require("apollo-server-lambda");

const typeDefs = gql`
  type Query {
    name: String
    skills: Skills
  }

  type Skills {
    frontEnd: [String]
    backEnd: [String]
    toolchain: [String]
    other: [String]
  }
`;

module.exports = typeDefs;
