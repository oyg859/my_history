module.exports = function () {

    var express = require('express');
    var session = require('express-session');
    var FileStore = require('session-file-store')(session);
    var bodyParser = require('body-parser');
    
    var cors = require('cors');

    var logger = require('morgan');
    var path = require('path');
    var app = express();

    app.use(session({
        secret: '1234DDSSDSD23@@@@@',
        resave: false,
        saveUninitialized: true,
        store: FileStore()
    }));

    var passport = require('./passport')(app);
    
   // 유튜브 이미지 제어 코드 

    // let UPLOAD_PATH = 'uploads';

    // var storage = multer.diskStorage({
    //     destination: function (req, file, cb) {
    //         cb(null, UPLOAD_PATH);
    //     },
    //     filename: function (req, file, cb) {
    //         cb(null, file.fieldname + '-' + Date.now());
    //     }
    // });
    // let upload = multer({ storage: storage });
    
    // 위에 동일 코드 있어서 주석처리
    // export const app = express();
    // app.use(cors());

    // var routes = require('./routes');

    // let url = 'mongodb://localhost/imageupload';
    // mongoose.connect(url, (err) => {
    //     if (err) {
    //         console.log(err);
    //     }else{
    //         console.log('몽고DB 접속되었습니다.')
    //     }
    // });

   /////////////////////

   console.log("오긴왔나~~~~~~~~");

    // route 설정
    var imageRouter = require('../routes/image/image.routes');
    var mypageRouter = require('../routes/mypage/mypage.routes');
    var memberRouter = require('../routes/member/member.routes');

   

    app.set('view engine', 'html');
    app.set('views', __dirname + '../../client_ionic/src/pages/**');
    app.use(express.static(path.join(__dirname + 'pages/**')));

    //app.use(require('../middlewares'));
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use('/mypage', mypageRouter);
    app.use('/member', memberRouter);
    app.use('/images', imageRouter);

     app.get('/a', function(req, res){
         res.send("왔어");
     });

    //  app.post('/mypage/viewMypageHistory', function(req, res){
    //        console.log("뭐라도 좀 제발~~!!!")
    //        user ={ result: "제발~!!"}
    //   res.json("뭐라도 좀 출력하자!!!");
    // });

     app.get('/a', function(req, res){
        res.send("성공");
     });

    return app;
}