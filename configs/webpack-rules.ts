import * as path from "path";

export const cssRules =   {
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
}

export const babelRules = {
  test: /\.(js|ts)x?$/,
  exclude: /node_modules/,
  loader: "babel-loader",
  options: {
    cacheDirectory: true
  }
}