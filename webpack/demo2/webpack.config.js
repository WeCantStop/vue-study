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
                //打包css
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                //打包sass
                test: /\.scss$/,
                loader: "style-loader!css-loader!sass-loader"
            },
            {
                //打包图片url形式的
                //转换为base_64的字符串存储到build.js中去,太大会导致效率低下
                test: /\.(jpg|png|ttf|gif)$/,
                //限制图片的大小，小于40k就转化成base_64字符串存储到build.js中去
                loader: "url-loader?limit=50000"
            }
        ]
    }
}
