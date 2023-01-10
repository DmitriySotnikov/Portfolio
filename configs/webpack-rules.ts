const isDev = process.env.NODE_ENV === "development";
export const cssRules = {
  test: /\.(sass|scss|css)$/,
  use: [
    "style-loader",
    {
      loader: "css-loader",
      options: {
        importLoaders: 2,
        sourceMap: isDev,
        modules: false,
      },
    },
    {
      loader: "postcss-loader",
      options: {
        sourceMap: isDev,
        postcssOptions: {
          plugins: ["postcss-preset-env"],
        },
      },
    },
    {
      loader: "sass-loader",
      options: {
        sourceMap: isDev,
      },
    },
  ],
};

export const babelRules = {
  test: /\.(js|ts)x?$/,
  exclude: /node_modules/,
  loader: "babel-loader",
  options: {
    cacheDirectory: true,
  },
};
