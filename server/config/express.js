module.exports = function () {

    var express = require('express');
    var session = require('express-session');
    var bodyParser = require('body-parser');
    var logger = require('morgan');
    var path = require('path');
    var app = express();
    
    // // route 설정
     var memberRouter = require('../routes/member/member.routes');
        
    // // view engine setup
    
    //app.use(require('../middlewares'));
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use('/member', memberRouter);
    
    app.set('view engine', 'jade');
    app.set('views', './views');
    
     app.get('/a', function(req, res){
         res.send("왔어");
     });

    return app;
}