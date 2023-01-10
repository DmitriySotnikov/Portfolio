import * as path from "path";
import { Configuration } from "webpack";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ImageMinimizerPlugin from "image-minimizer-webpack-plugin";
import { babelRules, cssRules, fontRules, imgRules, svgRules } from "./configs/webpack-rules";
import "@babel/polyfill";
import output from "./configs/outputConfig";
import optimization from "./configs/webpack-optimization";

const configProd: Configuration = {
  mode: "production",
  devtool: false,
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
      filename: `css/[name].[contenthash].css`,
      chunkFilename: "[id].css",
    }),
  ],
  optimization,
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  resolveLoader: {
    modules: [path.join(__dirname, "node_modules")],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
    modules: [path.join(__dirname, "node_modules")],
  },
};

export default configProd;
