import { CleanWebpackPlugin } from "clean-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import NodePolyfillPlugin from "node-polyfill-webpack-plugin";

const isDev = process.env.NODE_ENV === "development";

const plugins = [
  new NodePolyfillPlugin(),
  new CleanWebpackPlugin(),
  new HtmlWebpackPlugin({
    title: "Portfolio",
    // favicon: path.resolve(__dirname, "../src/static/img/favicon.ico"),
    template: path.resolve(__dirname, "../src/index.html"),
    filename: "index.html",
  }),
  new MiniCssExtractPlugin({
    filename: isDev ? "css/[name].css" : "css/[name].[contenthash].css",
    chunkFilename: isDev ? "[id].css" : "[id].[contenthash].css",
  }),
];

export default plugins;
