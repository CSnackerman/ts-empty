import * as path from 'path'
import * as webpack from 'webpack'
import 'webpack-dev-server'

import HtmlWebpackPlugin from 'html-webpack-plugin'
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin'

const clientConfig: webpack.Configuration = {
    name: 'app-client',
    entry: path.resolve(__dirname, 'app-client/index.ts'),
    output: {
        filename: 'client.[contenthash].js',
        path: path.resolve(__dirname, 'release/app-client'),
        clean: true
    },
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'release/app-client')
        },
        compress: true,
        port: 3001,
        proxy: {
            '/api': 'http://localhost:3000'
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'lib/client/template/index.html')
        })
    ],
    optimization: {
        minimize: true
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use:'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
            // TODO: add more loaders
        ],

    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        plugins: [
            new TsconfigPathsPlugin(),
        ]
    }
}

export default clientConfig