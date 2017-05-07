//var webpack = require("webpack");
var path = require("path");

module.exports = {
    //1.0 定义打包的入口文件路径 entry
    entry: "./src/main.js",
    //2.0 打包完成之后生成文件的路径和文件名
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "build.js"
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.scss$/,
                loader: "style-loader!css-loader!sass-loader"
            }
        ]
    }
}
