const path = require("path");

module.exports ={
    mode: "development", // режим разработки, js не сжимается.
    entry: "./src/index.js",
    output: {            // директория со сборкой проекта
        path: path.resolve(__dirname, "dist"),  // название директории
        filename: "[name].[hash].js"            // название файлов js
    },


}