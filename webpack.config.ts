import * as path from "path";
import { merge } from "webpack-merge";
import { Configuration } from "webpack";
import { babelRules, cssRules, fontRules, imgRules, svgRules } from "./configs/webpack-rules";
import "webpack-dev-server";
import devServer from "./configs/webpack-devServer";
import output from "./configs/webpack-outputConfig";
import { resolve, resolveLoader } from "./configs/webpack-resolve";
import plugins from "./configs/webpack-plugins";
import { optimization, performance } from "./configs/webpack-optimization";

const isDev = process.env.NODE_ENV === "development";

const baseConfig: Configuration = {
  mode: isDev ? "development" : "production",
  devtool: isDev ? "eval-cheap-module-source-map" : false,
  entry: ["@babel/polyfill", path.resolve(__dirname, "src/index.tsx")],
  output,
  module: {
    rules: [cssRules, babelRules, imgRules, svgRules, fontRules],
  },
  plugins,
  resolveLoader,
  resolve,
};

const config = isDev ? merge<Configuration>(baseConfig, { devServer }) : merge<Configuration>(baseConfig, { optimization, performance });

export default config;
