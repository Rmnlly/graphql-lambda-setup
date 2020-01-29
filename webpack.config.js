const nodeExternals = require("webpack-node-externals");
const path = require("path");

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
