import * as path from 'path';
import { Configuration } from "webpack";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ImageMinimizerPlugin from 'image-minimizer-webpack-plugin';
import { babelRules, cssRules } from "./configs/webpack-rules";
import "@babel/polyfill";


const configProd: Configuration = ({
    mode: 'production',
    devtool: false,
    entry: [
        // "@babel/polyfill",
        path.resolve(__dirname, "src/index.tsx"),
    ],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/[name].[contenthash].js",
        publicPath: "./",
        assetModuleFilename: "assets/[name].[contenthash][ext]"
    },
    module: {
        rules: [
            cssRules,
            babelRules,
            {
                test: /\.(png|jpe?g|gif|webp|ico)$/i,
                type: "asset/resource",
                generator: {
                    filename: "static/img/[name].[contenthash][ext]",
                }
            },
            {
                test: /\.(svg)$/i,
                type: "asset/inline"
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
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "Webpack Empty Project",
            favicon: path.resolve(__dirname, "src/static/img/favicon.ico"),
            template: path.resolve(__dirname, "src/index.html"),
            filename: "index.html",
        }),
        new MiniCssExtractPlugin({
            filename: `css/[name].[contenthash].css`,
            chunkFilename: "[id].css"
        }),
    ],
    optimization: {
        minimizer: [
            "...",
            new ImageMinimizerPlugin({
                minimizer: {
                    implementation: ImageMinimizerPlugin.imageminMinify,
                    options: {
                        plugins: [
                            ['gifsicle', { interlaced: true }],
                            ['jpegtran', { progressive: true }],
                            ['optipng', { optimizationLevel: 5 }],
                            [
                                'svgo',
                                {
                                    plugins: [
                                        {
                                            name: 'preset-default',
                                            params: {
                                                overrides: {
                                                    removeViewBox: false,
                                                    addAttributesToSVGElement: {
                                                        params: {
                                                            attributes: [
                                                                { xmlns: "http://www.w3.org/2000/svg" },
                                                            ],
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    ]
                                }
                            ],
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
    resolveLoader: {
        modules: [
            path.join(__dirname, 'node_modules')
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
        modules: [path.join(__dirname, 'node_modules')]
    },
});

export default configProd;