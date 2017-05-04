//var webpack = require("webpack");
module.exports = {
    //1.0 定义打包的入口文件路径 entry
    entry: "./src/main.js",
    //2.0 打包完成之后生成文件的路径和文件名
    output: {
        path: "./dist",
        filename: "build.js"
    }
}
