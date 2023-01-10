import * as path from "path";

const devServer = {
  watchFiles: path.resolve(__dirname, "../src"),
  historyApiFallback: true,
  compress: true,
  port: 3000,
  hot: true,
};

export default devServer;
