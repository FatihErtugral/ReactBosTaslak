const path = require('path');
module.exports = {
    entry: ["./src/App.jsx"],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: path.join(__dirname, "/public/js"),
        filename: "bundle.js",
        publicPath: "/public/"
    },
    watch: true,
    mode : 'development',
    devtool: 'inline-source-map',
    // devServer: {
    //     contentBase: path.join(__dirname, 'public'),
    //     compress: true,
    //     port: 9000,
    //     open:true,
    //     hot: true
    // }
}

//             {
//     test: /\.css$/,
//         use: ["style-loader", "css-loader"]
// }

// const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
// const webpack = require('webpack'); //to access built-in plugins
// const path = require('path');

// module.exports = {
//     entry: './path/to/my/entry/file.js',
//     output: {
//         filename: 'my-first-webpack.bundle.js',
//         path: path.resolve(__dirname, 'dist')
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.(js|jsx)$/,
//                 use: 'babel-loader'
//             }
//         ]
//     },
//     plugins: [
//         new webpack.ProgressPlugin(),
//         new HtmlWebpackPlugin({ template: './src/index.html' })
//     ]
// };