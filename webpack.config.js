const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

const config = {
  entry: path.resolve(__dirname, "src", "index.js"),

  output: {
    filename: "[name].[contenthash].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader", // babel for js loader
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(ts|tsx)$/, // for TS
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
      {
        test: /\.(css)$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset", // for <8 kb images will add in main.js & >8 kb images will have seperate file
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "vanillaJS app", // you can over Write title Name
      template: path.resolve(__dirname, "src", "index.html"),
    }),
    new Dotenv(),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        node_vendors: {
          name: "vendor",
          test: /[\\/]node_modules[\\/]/, // like Lodash imported from node module is bigger size will have seperate file
          chunks: "all",
          priority: 1,
        },
      },
    },
  },

  devtool: "inline-source-map",
  devServer: {
    // for live development reload
    contentBase: "./dist",
  },
  mode: "production",
};

module.exports = config;
