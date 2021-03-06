const { CleanWebpackPlugin } = require('clean-webpack-plugin');;

const path = require('path');
const webpack = require('webpack');
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
require("@babel/polyfill");

process.env.NODE_ENV = process.env.NODE_ENV || "development";
///
switch (process.env.NODE_ENV) {
    case 'test':
    {
        require('dotenv').config({path: '.env.test'});
    }
    break;
    case 'development':
    {
        require('dotenv').config({path: '.env.development'});
    }
    break;
}

module.exports = env => {
    const isProduction = env === "production";
    return {
        entry: ['@babel/polyfill', './src/app.jsx'],
        optimization: {
            minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})]
        },
        output: {
            path: path.join(__dirname, 'public', 'dist'),
            filename: "bundle.js"
        },
        mode: isProduction ? "production" : "development",
        plugins: [
            new CleanWebpackPlugin(),
            new MiniCssExtractPlugin({
            filename: "style.css"
        }), new webpack.DefinePlugin({
            'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
            'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
            'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
            'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
            'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
            'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID),
            'process.env.FIREBASE_APP_ID': JSON.stringify(process.env.FIREBASE_APP_ID)
        })],
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.jsx?$/,
                exclude: /node_modules/
            }, {
                test: /\.s?css$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        hmr: !isProduction
                    }
                }, {
                    loader: "css-loader",
                    options: {
                        sourceMap: true
                    }
                }, {
                    loader: "sass-loader",
                    options: {
                        sourceMap: true
                    }
                }]
            }]
        },
        devtool: isProduction ? false : "inline-source-map",
        devServer: {
            contentBase: path.join(__dirname,'public'),
            historyApiFallback: true,
            publicPath: "/dist/"
        }
    };
};