const path = require("path");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    // context: path.resolve(__dirname, "src"), // базовый путь с проектом
    mode: "development", // режим разработки, js не сжимается.
    entry: "./src/index.js", // точка входа
    output: {            // директория со сборкой проекта
        path: path.resolve(__dirname, "dist"),  // название директории
        filename: "[name].[hash].js",           // название файлов js
        assetModuleFilename: path.join("images","[name].[contenthash][ext]") // путь для хранения assets
    },
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            // sourceMap: true
                        }
                    },
                    'postcss-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.svg$/,
                type: 'asset/resource',
                generator: {
                    filename: path.resolve(__dirname,"./src/static/[name].[contenthash][ext]"), // проверить!
                }
            }

        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, "./src/index.html")
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
    ],
    devServer: {
        watchFiles: path.resolve(__dirname, 'src'),
        port: 3000,
    },
}