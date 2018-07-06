const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack'); 
var path = require('path');

module.exports = {
  target: 'node',
  externals: [nodeExternals()],
  entry: [path.join(__dirname, './app.js'), // file extension after index is optional for .js files     
  ],
  output: {
    path: path.join(__dirname, 'dist'),  // bundle.js 파일 저장 폴더
    filename: 'bundle.js'   // 번들파일 이름
  },
   devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,
    contentBase: './dist', //브라우저에서 접근하는 파일의 위치
    hot: true  // HMR (Hot Module Replacement: 변경된 모듈을 새로고침 없이 런타임 업데이트) 사용여부
  }

//,   module: {

//     rules: [
//         {
//           test: /\.js$/,
//           exclude: /node_modules/,
//           use: {
//             loader: "babel-loader"
//           }
//         }
//       ]
//   }
  
}
