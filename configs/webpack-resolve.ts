import path from "path";

export const resolve = {
  extensions: [".tsx", ".ts", ".jsx", ".js"],
  modules: [path.join(__dirname, "../node_modules")],
};

export const resolveLoader = {
  modules: [path.join(__dirname, "../node_modules")],
};
