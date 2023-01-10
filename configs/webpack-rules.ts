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

export const imgRules = {
  test: /\.(png|jpe?g|gif|webp|ico)$/i,
  type: "asset/resource",
  generator: {
    filename: isDev ? "src/static/img/[name].[ext]" : "static/img/[name].[contenthash][ext]",
  },
};

export const svgRules = {
  test: /\.(svg)$/i,
  type: "asset/inline",
};

export const fontRules = {
  test: /\.(woff2?|eot|ttf|otf)$/i,
  type: "asset/resource",
  generator: {
    filename: isDev ? "static/font/[name].[ext]" : "static/font/[name].[contenthash][ext]",
  },
};
