import * as path from "path";
// import { merge } from "webpack-merge";
import { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { babelRules, cssRules, fontRules, imgRules, svgRules } from "./configs/webpack-rules";
// const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
import "webpack-dev-server";
import devServer from "./configs/webpack-devServer";
import output from "./configs/outputConfig";

const config: Configuration = {
  mode: "development",
  devtool: "eval-cheap-module-source-map",
  entry: [
    // "@babel/polyfill",
    path.resolve(__dirname, "src/index.tsx"),
  ],
  output,
  module: {
    rules: [cssRules, babelRules, imgRules, svgRules, fontRules],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Portfolio",
      favicon: path.resolve(__dirname, "src/static/img/favicon.ico"),
      template: path.resolve(__dirname, "src/index.html"),
      filename: "index.html",
    }),
    new MiniCssExtractPlugin({
      filename: `css/[name].css`,
      chunkFilename: "[id].css",
    }),
  ],

  resolveLoader: {
    modules: [path.join(__dirname, "node_modules")],
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
    /*
    plugins: [ new TsconfigPathsPlugin({
      configFile: "./tsconfig-for-webpack-config.json",
      logLevel: "info",
      extensions: [".ts", ".tsx"],
      mainFields: ["browser", "main"],
    }) ],
    */
    modules: [path.join(__dirname, "node_modules")],
  },
  devServer,
};

export default config;
