const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    devtool: false,
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "js/[name].[contenthash].js",
        publicPath: "/",
        assetModuleFilename: "assets/[name].[contenthash][ext]"
    },
    module: {
        rules: [
            {
                test: /\.(sass|scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 2,
                            sourceMap: false,
                            modules: false
                        },
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    "postcss-preset-env"
                                ]
                            }
                        }
                    },
                    "sass-loader"
                ],
            },
            {
                test: /\.(png|jpe?g|gif|webp|ico)$/i,
                type: "asset/resource",
                generator: {
                    filename: "static/img/[name].[contenthash][ext]",
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)$/i,
                type: "asset/resource",
                generator: {
                    filename: "static/font/[name].[contenthash][ext]"
                }
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: `css/[name].[contenthash].css`,
            chunkFilename: "[id].css"
        }),
    ],
    optimization: {
        // переделать по документации
        minimizer: [
            new ImageMinimizerPlugin({
                minimizer: {
                    implementation: ImageMinimizerPlugin.imageminMinify,
                    options: {
                        plugins: [
                            ['gifsicle', { interlaced: true }],
                            ['jpegtran', { progressive: true }],
                            ['optipng', { optimizationLevel: 5 }],
                            ['svgo', { name: 'preset-default' }],
                        ]
                    }
                }
            })
        ],
        splitChunks: {
            cacheGroups: {
                vendors: {
                    name: "chunk-vendors",
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    chunks: "initial"
                },
                common: {
                    name: "chunk-common",
                    minChunks: 2,
                    priority: -20,
                    chunks: "initial",
                    reuseExistingChunk: true
                },
            }
        }
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },
});