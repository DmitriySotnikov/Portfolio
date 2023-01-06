const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: [
    "@babel/polyfill",
    path.resolve(__dirname, "src/index.tsx")
  ],
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "js/[name].js",
    publicPath: "/",
    assetModuleFilename: path.join("assets", "[name].[ext]")
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
            presets: [
              "@babel/preset-typescript",
              [
                "@babel/preset-env",
                {
                  "useBuiltIns": "usage",
                  "corejs": 3
                }
              ],
              "@babel/preset-react",
            ]
          }
        }
      },
      {
        test: /\.(png|jpe?g|gif|webp|ico|svg)$/i,
        type: "asset/resource",
        generator: {
          filename: "/static/img/[name].[ext]"
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: "asset/inline"
      },
      {
        test: /\.(svg)$/i,
        type: "asset/inline"
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      // title: "Webpack Empty Project"
      favicon: path.resolve(__dirname, "src/static/img/favicon.ico"),
      template: path.resolve(__dirname, "src/index.html"),
      filename: "index.html",
    })
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
    // alias: {"react-dom": "@hot-loader/react-dom"} ???
  },
};