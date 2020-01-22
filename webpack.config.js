const nodeExternals = require("webpack-node-externals");
const path = require("path");

//We're not using webpack currently, this is an example build file

module.exports = {
  optimization: { minimize: false },
  entry: "./functions/graphql/index.js",
  output: {
    path: path.join(__dirname, "functions"),
    filename: "graphql.js",
    libraryTarget: "commonjs"
  },
  target: "node",
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: new RegExp(`(node_modules)`),
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
