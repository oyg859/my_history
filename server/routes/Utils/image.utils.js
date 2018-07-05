

var multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // 파일형식에 따라 이미지 경로 저장 코드 넣을 것 if 문
        cb(null, '/uploads');  // 애플리케이션에 저장될 디렉토리 지정
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now());
    }
});
var upload = multer({ storage : storage });  

module.exports = {
                upload : upload, 
                storage : storage  
                }