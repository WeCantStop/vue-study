//var webpack = require("webpack");
var path = require("path");
//获取到插件对象
var htmlWp = require("html-webpack-plugin")

module.exports = {
    //1.0 定义打包的入口文件路径 entry
    entry: "./src/main.js",
    //2.0 打包完成之后生成文件的路径和文件名
    output: {
        publicPath:'/',
        path: path.resolve(__dirname, 'dist'),
        filename: "build.js"
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: "vue-loader"
            },
            //js语法 es6 转 es5
            {
                test: /\.js$/,
                //不建议写在这里，在打包vue时候，要用插件形式写在下面
                //loader:"babel-loader?presets[]=es2015",创建.babelrc文件代替
                loader:"babel-loader",
                exclude: /node_modules/
            },
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
    },
    plugins: [
        new htmlWp({
            title: "首页",
            filename: "index.html",
            template: "index.html"
        })
    ]

}
