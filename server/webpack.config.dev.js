// 개발 서버 빌드 설정

var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-eval-source-map', // 크롬, 개발자 콘솔등 도구로 디버깅 지원
  entry: ['./app',  // file extension after index is optional for .js files
          'webpack-dev-server/client?http://localhost:3000',
          'webpack-hot/dev-server'       
  ], 
  output: {
    path: path.join(__dirname, 'server'),  // bundle.js 파일 저장 폴더
    filename: 'bundle.js'   // 번들파일 이름
  }
  ,
  plugins: [
    new webpack.optimize.UglifyJsPlugin({  // 코드축소 (띄어쓰기 등 제거)
      compressor: {
        warnings: false,  
      },
    }),
   new webpack.optimize.OccurenceOrderPlugin()   //  발생횟수에 따라 모듈 및 청크 id 할당 (용량관련)
  ],
  devServer: {
    contentBase: './', //브라우저에서 접근하는 파일의 위치
    hot: true  // HMR (Hot Module Replacement: 변경된 모듈을 새로고침 없이 런타임 업데이트) 사용여부
  }
}