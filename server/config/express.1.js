module.exports = function () {

    var express = require('express');
    var bodyParser = require('body-parser');
    var logger = require('morgan');
    var path = require('path');
    var methodOverride = require('method-override');
    var pkg  = require('../package.json');
    var config  = require('../config/config');
    var serverStartLogger  = require('mm-node-logger')(module);
    var app = express();

    // route 설정
    var memberRouter = require('../routes/member/member.routes');
        

    //app.use(require('../middlewares'));
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json);
    app.use(methodOverride());
    app.use('/member', memberRouter);
    app.get('/a', function(req, res){
        res.send("왔어");
    })

    // view engine setup
    app.set('views', path.join(__dirname, '../../client/views'));
    app.set('view engine', 'jade');
    app.set('view engine', 'ejs');
    app.engine('html', require('ejs').renderFile);

    app.listen(config.server.port, function () {
        console.log('3000 포트 접속함!!');
        var serverBanner = ['',
            '*************************************' + ' EXPRESS SERVER '.yellow + '********************************************',
            '*',
            '* ' + pkg.description ,
            '* @version ' + pkg.version,
            '* @author ' + pkg.author.name,
            '* @copyright ' + new Date().getFullYear() + ' ' + pkg.author.name,
            '* @license ' + pkg.license.type + ', ' + pkg.license.url,
            '*',
            '*' + ' App started on port: '.blue + config.server.port + ' - with environment: '.blue + config.environment.blue,
            '*',
            '*************************************************************************************************',
            ''].join('\n');
         serverStartLogger.info(serverBanner);
    });

    // app.listen(3000, function() {
    //     console.log('3000 포트 접속!');
    // });

    return app;
}