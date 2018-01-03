// 运行环境是node，common.js规范
const webpack = require('webpack');
const path = require('path');


module.exports = {
    // 入口
    entry: path.resolve(__dirname + "/src/main.js"),
    // 出口
    output:{
        // /dist目录下  
        // __dirname 绝对路径，node的常量 
        path: path.resolve(__dirname + "/dist/js"),
        filename: "bundle.js"
    },
    // 开发组件
    devtool: 'source-map',
    module:{
        // 加载器 如import.  在js中 利用babel-loader babel编译的功能
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,  //排除该目录
                loader: "babel-loader"
            },
            {
                test: /\.vue/,
                loader: "vue-loader"
            }
        ]
    },
    // // 排除不要打包的
    // externals:{
    //     'jquery': 'jQuery'
    // },
    watch:true,
    watchOptions:{
        ignored: /node_modules|dist|build|docs|css/,
        poll: 1000  //每秒监听一次
    },
    resolve:{
        extensions:['.js','.vue'],
        alias:{
            'vue$':'vue/dist/vue.min.js' //手动强行执行 在node_modules中
        }
    }
}