// 生产环境

const { merge } = require('webpack-merge')
const base = require('./webpack.base')
const webpack = require('webpack')

module.exports = merge(base, {
  mode: 'production',
  devtool: 'nosources-source-map',
  plugins:[
    // 定义全局变量
    new webpack.DefinePlugin({
        process:{
            env:{
                NODE_DEV:JSON.stringify('production')
            }
        }
    })
  ]
})
