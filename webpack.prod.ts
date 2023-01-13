import * as path from "path";
import { Configuration } from "webpack";
import { babelRules, cssRules, fontRules, imgRules, svgRules } from "./configs/webpack-rules";
// import "@babel/polyfill";
import output from "./configs/webpack-outputConfig";
import { optimization, performance } from "./configs/webpack-optimization";
import plugins from "./configs/webpack-plugins";
import { resolve, resolveLoader } from "./configs/webpack-resolve";

const configProd: Configuration = {
  mode: "production",
  devtool: false,
  entry: ["@babel/polyfill", path.resolve(__dirname, "src/index.tsx")],
  output,
  module: {
    rules: [cssRules, babelRules, imgRules, svgRules, fontRules],
  },
  plugins,
  optimization,
  performance,
  resolveLoader,
  resolve,
};

export default configProd;
