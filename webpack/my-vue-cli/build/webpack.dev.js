// 开发环境

const { merge } = require('webpack-merge')
const base = require('./webpack.base')
const webpack = require('webpack')

module.exports = merge(base, {
  mode: 'development',
  devServer: {
    open: true,
    // hot: true,
  },
  devtool: 'eval-cheap-module-source-map',
  plugins:[
    // 定义全局变量
    new webpack.DefinePlugin({
        process:{
            env:{
                NODE_DEV:JSON.stringify('development')
            }
        }
    })
  ]
})
