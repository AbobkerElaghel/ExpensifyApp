const path = require('path');
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = env => {
    const isProduction = env === "production";

    return {
        entry: './src/app.jsx',
        optimization: {
            minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})]
        },
        output: {
            path: path.join(__dirname,'public'),
            filename: "bundle.js"
        },
        mode: "development",
        plugins: [new MiniCssExtractPlugin({
            filename: "style.css"
        })],
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.jsx$/,
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
        devtool: isProduction ? "source-map" : "inline-source-map",
        devServer: {
            contentBase: path.join(__dirname,'public'),
            historyApiFallback: true
        }
    };
};