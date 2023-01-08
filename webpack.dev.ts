import * as path from 'path';
import { Configuration } from "webpack";
import { merge } from "webpack-merge";
import 'webpack-dev-server';

const configDev = merge<Configuration>({
    mode: 'development',
    devtool: "eval-cheap-module-source-map",    // 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(sass|scss|css)$/,
                use: [
                   "style-loader",
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            sourceMap: true,
                            modules: false
                        },
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: true,
                            postcssOptions: {
                                plugins: [
                                    "postcss-preset-env"
                                ]
                            }
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true
                        },
                    },
                ],
            },
        ]
    },
    devServer: {
        watchFiles: path.resolve(__dirname, "./src"),
        historyApiFallback: true,
        compress: true,
        port: 3000,
        hot: true
    }
});

export default configDev;