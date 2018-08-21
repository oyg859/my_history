
var multer = require('multer');

let UPLOAD_PATH = 'uploads';

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // 파일형식에 따라 이미지 경로 저장 코드 넣을 것 if 문
        cb(null, UPLOAD_PATH);  // 애플리케이션에 저장될 디렉토리 지정
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now()+'.jpg');
    }
});
var upload = multer({ storage : storage });  
//console.log("upload:>>> "+upload +", storage:>>>"+storage);

module.exports = {
                upload : upload, 
                storage : storage  
                }