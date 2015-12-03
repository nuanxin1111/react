var path = require('path');
var node_modules_dir = path.resolve(__dirname, 'node_modules');

var config = {
  entry: {
    bundle: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://0.0.0.0:8080',
    path.resolve(__dirname, 'app/main.js'),
    ]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
    {
        test: /\.jsx?$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
        exclude: [node_modules_dir],
        loader: 'babel-loader', // 加载模块 "babel" 是 "babel-loader" 的缩写
        query: {
          presets: ['es2015', 'react']
        }
      }
      ]
    }
  };

  module.exports = config;
