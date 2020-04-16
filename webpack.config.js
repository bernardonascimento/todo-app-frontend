var path = require('path');
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: "./src/index.jsx",
  output: {
    path: __dirname + "/public",
    filename: "./app.js",
  },
  devServer: {
    port: 8080,
    contentBase: "./public",
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
    alias: {
      modules: path.resolve(__dirname, "node_modules"),
    },
  },
  plugins: [new ExtractTextPlugin("app.css")],
  module: {
    rules: [
      {
        test: /.js[x]?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
              plugins: ["transform-object-rest-spread"],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\woff|.woff2|.ttf|.eot|.svg*.*$/,
        use: ["file-loader"],
      },
    ],
  },
};
