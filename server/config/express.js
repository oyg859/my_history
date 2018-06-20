module.exports = function () {

    var express = require('express');
    var session = require('express-session');
    var FileStore = require('session-file-store')(session);
    var bodyParser = require('body-parser');
    
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
    
   
    // route 설정
    var mypageRouter = require('../routes/mypage/mypage.routes');
    var memberRouter = require('../routes/member/member.routes');

    console.log("오긴왔나~~~~~~~~");

    app.set('view engine', 'html');
    app.set('views', __dirname + '../../client_ionic/src/pages/**');
    app.use(express.static(path.join(__dirname + 'pages/**')));

    //app.use(require('../middlewares'));
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use('/mypage', mypageRouter);
    app.use('/member', memberRouter);

     app.get('/a', function(req, res){
         res.send("왔어");
     });

    //  app.post('/mypage/viewMypageHistory', function(req, res){
    //        console.log("뭐라도 좀 제발~~!!!")
    //        user ={ result: "제발~!!"}
    //   res.json("뭐라도 좀 출력하자!!!");
    // });

    return app;
}