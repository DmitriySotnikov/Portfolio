const path = require("path");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

// ПЕРЕДЕЛАТЬ НА ДВА КОНФИГА!!! Иначе это просто ...

const isProd = process.env.NODE_ENV === "production"

module.exports = {
    // context: path.resolve(__dirname, "src"),                               // базовый путь с проектом
    mode: isProd ? "production" : "development",                              // выбор режима сборки, разработка или продакшен
    devtool: isProd ? false : "eval-cheap-module-source-map",                 // отображения кода в режиме разработки
                                                                              // source-map
    entry: [
        "@babel/polyfill",                                                    // подключения полифила для babel
        path.resolve(__dirname, "src/index.tsx")                              // точка входа
    ],
    output: {                                                                 // директория со сборкой проекта
        path: path.resolve(__dirname, "./dist"),
        filename: `js/${isProd ? `[name].[hash].js` : `[name].js`}`,          // название и директория для js
        publicPath: "/",
        assetModuleFilename: path.join("assets", "[name].[contenthash][ext]") // путь для хранения assets
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
                            "@babel/preset-typescript",    // preset typescript
                            [
                                "@babel/preset-env",       // preset transpile JS to ES5
                                {
                                    "useBuiltIns": "usage",
                                    "corejs": 3
                                }
                            ],
                            "@babel/preset-react",         // preset react
                        ]
                    }
                }
            },
            {
                test: /\.(sass|scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            sourceMap: false,
                            modules: false
                        },
                    },
                    'postcss-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
                type: isProd ? 'asset' : 'asset/resource',
                // В продакшен режиме изображения размером до 8кб будут инлайнится в код
                // В режиме разработки все изображения будут помещаться в dist/assets
            },
            {
                test: /\.svg$/,
                type: 'asset/resource',
                generator: {
                    filename: path.resolve(__dirname,"./src/static/[name].[contenthash][ext]"), // проверить!
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)$/i,
                type: 'asset/resource',
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js'], // добавления массива с расширениями чтоб не писать их при импорте
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, "./src/index.html"),
            filename: "index.html",
            minify: isProd
        }),
        new MiniCssExtractPlugin({
            filename: `css/${isProd ? `[name].[contenthash].css` : `[name].css`}`,
            chunkFilename: "[id].css"
        }),
    ],
    optimization: {
        // minimizer нужен только для продакшена, надо убрать из общей сборки.
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
        // правило по которому будут создаваться chunk. нужно только для продакшена.
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
    // Размер Chunks
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },
    devServer: {
        watchFiles: path.resolve(__dirname, "src"),
        historyApiFallback: true,
        compress: true,
        port: 3000,
        hot: true
    },
}