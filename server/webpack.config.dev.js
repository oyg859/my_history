
////////////// 구버전이라 작동 안되는 코드 web.config.js 로 실행중 /////////


// 개발 서버 빌드 설정
// 개발 서버 실행 코드 (CLI 에서) webpack-dev-server --config webpack.config.dev.js

var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-eval-source-map', // 크롬, 개발자 콘솔등 도구로 디버깅 지원
  entry: [path.join(__dirname, './app.js'), // file extension after index is optional for .js files
  'webpack-dev-server/client?http://localhost:3000',
          'webpack-hot/dev-server'       
  ],
  output: {
    path: path.join(__dirname, 'server'),  // bundle.js 파일 저장 폴더
    filename: 'bundle.js'   // 번들파일 이름
  }
  ,
  resolve: {
    extensions: ['.Webpack.js', '.web.js', '.ts', '.js', '.jsx', '.tsx']
  }
  ,
  // plugins: [
  // ],
  // devServer: {
  //   contentBase: path.join(__dirname, 'dist'),
  //   compress: true,
  //   port: 3000,
  //   contentBase: './', //브라우저에서 접근하는 파일의 위치
  //   hot: true  // HMR (Hot Module Replacement: 변경된 모듈을 새로고침 없이 런타임 업데이트) 사용여부
  // }
}