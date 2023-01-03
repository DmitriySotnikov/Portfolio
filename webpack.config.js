const path = require("path");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let mode = 'development';
if (process.env.NODE_ENV === 'production') {
    mode = 'production';
}

module.exports = {
    // context: path.resolve(__dirname, "src"),                             // базовый путь с проектом
    mode,                                                                    // выбор режима сборки, разработка или продакшен
    devtool: "source-map",
    entry: [
        "@babel/polyfill",                                                   // подключения полифила для babel
        path.resolve(__dirname, "src/index.tsx")                             // точка входа
    ],
    output: {                                                                // директория со сборкой проекта
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[hash].js",
        publicPath: "/",
        assetModuleFilename: path.join("assets","[name].[contenthash][ext]") // путь для хранения assets
    },
    module: {
        rules: [
            {
                test: /\.m?jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        cacheDirectory: true,
                        presets: [
                            "@babel/preset-env",       // preset преобразования кода для старых браузеров
                            "@babel/preset-react",     // preset для работы react
                            "@babel/preset-typescript" // preset для typescript
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
                            modules: false,
                        },
                    },
                    'postcss-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
                type: mode === 'production' ? 'asset' : 'asset/resource',
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
    extensions: ['.jsx', '.ts', '.tsx'], // добавления массива с расширениями чтоб не писать их при импорте
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, "./src/index.html"),
            filename: "index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
        }),
    ],
    devServer: {
        watchFiles: path.resolve(__dirname, "src"),
        port: 3000,
    },
}