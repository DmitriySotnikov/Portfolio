import * as path from "path";
// import { merge } from "webpack-merge";
import { Configuration } from "webpack";
import { babelRules, cssRules, fontRules, imgRules, svgRules } from "./configs/webpack-rules";
// const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
import "webpack-dev-server";
import devServer from "./configs/webpack-devServer";
import output from "./configs/webpack-outputConfig";
import { resolve, resolveLoader } from "./configs/webpack-resolve";
import plugins from "./configs/webpack-plugins";

const config: Configuration = {
  mode: "development",
  devtool: "eval-cheap-module-source-map",
  entry: ["@babel/polyfill", path.resolve(__dirname, "src/index.tsx")],
  output,
  module: {
    rules: [cssRules, babelRules, imgRules, svgRules, fontRules],
  },
  plugins,
  resolveLoader,
  resolve,
  /*
    plugins: [ new TsconfigPathsPlugin({
      configFile: "./tsconfig-for-webpack-config.json",
      logLevel: "info",
      extensions: [".ts", ".tsx"],
      mainFields: ["browser", "main"],
    }) ],
    */
  devServer,
};

export default config;
