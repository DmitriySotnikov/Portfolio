import * as path from 'path';
// import { merge } from "webpack-merge";
import { Configuration } from "webpack";
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import { babelRules, cssRules } from "./configs/webpack-rules";
// const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
import 'webpack-dev-server';


const config: Configuration = ({
  mode: 'development',
  devtool: "eval-cheap-module-source-map",
  entry: [
    // "@babel/polyfill",
    path.resolve(__dirname, "src/index.tsx")
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "./js/[name].js",
    publicPath: "/",
    assetModuleFilename: path.join("assets", "[name].[ext]")
  },
  module: {
    rules: [
      cssRules,
      babelRules,
      {
        test: /\.(png|jpe?g|gif|webp|ico)$/i,
        type: "asset/resource",
        generator: {
          filename: "/static/img/[name].[ext]"
        }
      },
      {
        test: /\.(svg)$/i,
        type: "asset/inline"
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: "asset/inline"
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Portfolio",
      favicon: path.resolve(__dirname, "src/static/img/favicon.ico"),
      template: path.resolve(__dirname, "src/index.html"),
      filename: "index.html",
    })
  ],
  resolveLoader: {
    modules: [
      path.join(__dirname, 'node_modules')
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
    /*
    plugins: [ new TsconfigPathsPlugin({
      configFile: "./tsconfig-for-webpack-config.json",
      logLevel: "info",
      extensions: [".ts", ".tsx"],
      mainFields: ["browser", "main"],
    }) ],
    */
    modules: [path.join(__dirname, 'node_modules')]
  },
  devServer: {
    watchFiles: path.resolve(__dirname, "src"),
    historyApiFallback: true,
    compress: true,
    port: 3000,
    hot: true
  }
});

export default config;