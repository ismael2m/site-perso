const path = require('path');
const webpack = require('webpack');

//Plugins for Dist
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const devMode = process.env.NODE_ENV !== 'production';


let config = {
    mode: 'development',
    watch: true,
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    // Optimized build
    optimization : {
        splitChunks: {
            chunks: 'all',
          },
        minimize: true,
        minimizer: [
            new UglifyJsPlugin({
            cache: true,
            parallel: true,
            sourceMap: false,
            uglifyOptions: {
                warnings: false
            } 
          }),
          new OptimizeCSSAssetsPlugin({}),
        ],
    },

    module: {
        rules: [
            {
                test:/\.js$/,
                exclude : /node_modules/,
                use:['babel-loader']
            },
        
        // CSS SASS Autoprefixer Loader
            {
                test:/\.(sa|sc|c)ss$/,
                use: [
                devMode ? 'style-loader': MiniCssExtractPlugin.loader, 
                'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: (loader) => [
                                require('autoprefixer')({
                                    overrideBrowserslist : ['last 2 versions', 'ie > 8']
                                }),
                            ]
                        }
                    },
                    'sass-loader'
                ]
            },

            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      outputPath: './public/images/',
                    },
                  },
                ],
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({ 
            template: path.resolve(__dirname, 'src', 'index.html') 
        }),
        new webpack.DefinePlugin({
            'process.env':{
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
          }),
    ],
 
}


module.exports = config;



