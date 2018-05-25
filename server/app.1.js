var app = require('./config/express')();
//var express = require('express');
// var pkg  = require('./package.json');
// var config  = require('./config/config');
// var serverStartLogger  = require('mm-node-logger')(module);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
// 	next(createError(404));
//   });

//   app.get('/a', function(req, res){
// 	res.send("왔dssssssssss어");
// })

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
// 	res.locals.message = err.message;
// 	res.locals.error = req.app.get('env') === 'development' ? err : {};
//   // render the error page
//   res.status(err.status || 500);
//   res.send('error');
// });

// app.listen(config.server.port, function () {
// 	console.log('3000 포트 접속함!!');
// 	var serverBanner = ['',
// 		'*************************************' + ' EXPRESS SERVER '.yellow + '********************************************',
// 		'*',
// 		'* ' + pkg.description ,
// 		'* @version ' + pkg.version,
// 		'* @author ' + pkg.author.name,
// 		'* @copyright ' + new Date().getFullYear() + ' ' + pkg.author.name,
// 		'* @license ' + pkg.license.type + ', ' + pkg.license.url,
// 		'*',
// 		'*' + ' App started on port: '.blue + config.server.port + ' - with environment: '.blue + config.environment.blue,
// 		'*',
// 		'*************************************************************************************************',
// 		''].join('\n');
// 	 serverStartLogger.info(serverBanner);
// });


    app.listen(3000, function() {
        console.log('3000 포트 접속!');
    });

module.exports = app;
