
////////////// 구버전이라 작동 안되는 코드 web.config.js 로 실행중 /////////



// 프로덕트 서버 빌드 설정
// 프로덕트 서버 실행 코드 (CLI 에서) webpack --config webpack.config.prod.js

var path = require('path');
var webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  devtool: 'cheap-eval-source-map', // 크롬, 개발자 콘솔등 도구로 디버깅 지원
  entry: ['./app'], // file extension after index is optional for .js files
  output: {
    path: path.join(__dirname, 'server'),  // bundle.js 파일 저장 폴더
    filename: 'bundle.js'   // 번들파일 이름
  },
  module: {
    optimization: {
      runtimeChunk: false,
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: true
        })
      ]
  }
},

  plugins: [
    // 실행되지 않는 과거 코드
    // new webpack.optimize.UglifyJsPlugin({  // 코드축소 (띄어쓰기 등 제거)
    //   compressor: {
    //     warnings: false,  
    //   },
    // }),
    // new webpack.optimize.OccurenceOrderPlugin()   //  발생횟수에 따라 모듈 및 청크 id 할당
  ]
}