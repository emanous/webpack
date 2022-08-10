const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: './src/client/index.js',
    mode: 'production',
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },

       
       { 
           
        test:/\/scss$/,
        use:[MiniCssExtractPlugin.loader, "cssloader" , " sass-loader"]

       },
       
    {
         
           test: /\.(png|jpe?g|gif)$/i,
           loader: 'file-loader',
           options: {
          publicPath: 'assets',
        }
      }
    ]
       
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        })
    ]
}

