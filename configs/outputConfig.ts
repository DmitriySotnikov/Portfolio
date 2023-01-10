import path from "path";

const isDev = process.env.NODE_ENV === "development";

const output = {
  path: path.resolve(__dirname, "../dist"),
  filename: isDev ? "js/[name].js" : "js/[name].[contenthash].js",
  publicPath: isDev ? "/" : "./",
  assetModuleFilename: isDev ? "assets/[name].[ext]" : "assets/[name].[contenthash][ext]",
};

export default output;
