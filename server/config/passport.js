
module.exports = function (app) {

    var connMysql = require('./mysql')();
    var bkfd2Password = require("pbkdf2-password");
    var passport = require('passport');
    var LocalStrategy = require('passport-local').Strategy;
    var FaceBookStrategy = require('passport-facebook').Strategy;
    var hasher = bkfd2Password();

    var session = require('express-session');
    // app.use(session({
    //     secret: 'abcdefg',
    //     resave: true,
    //     saveUninitialized: false,
    //     cookie: { secure: true } // this line
    // }));

    // set session
    app.use(session({
        secret: 'SomethingPowerfulSecret'
    }));

    app.use(passport.initialize());
    app.use(passport.session());


    passport.serializeUser(function (user, done) {
        console.log('serializeUser 유저~!!!', user);
        console.log('serializeUser user.userEmail === 반환값 =>>>', user);
        done(null, user.userEmail);
    });

    // serializeUser 의 user.userEmail 설정정보가 id 로 들어감.
    passport.deserializeUser(function (id, done) {
        console.log('desirialize:   ', id);

        var sql = 'SELECT user_name AS userName, user_email AS userEmail FROM project_x.member WHERE user_email=?';
        connMysql.query(sql, [id], function (err, user) {
            if (err) {
                console.log("쿼리 실행 후 에러 발생 내역:  " + err);
                return done(null, false);
            } else {
                console.log("데이터 조회 완료입니다~!!!!");
               
           
                if (typeof user == "undefined" || user == null || user == "") {
                    // let resultCheckEmail = {
                    //     result: "false"
                    // };
                    console.log("동일 이메일 존재 안함 !!!!!!!!");
                    return done(null, false);
                } else  {
                console.log("동일 유저 존재함~!!!!!!!!");
                console.log("데이터 조회 한 user 정보  :   >>  "+ JSON.stringify(user));
                console.log("데이터 조회 한 user 정보  :   >>  "+ user);
                
                //user = JSON.stringify(user);
                return done(null, user);
            }
        }
        });
    });

    passport.use(new LocalStrategy({
        // passport 변수명은 고정이기 때문에, 직접 설정한 변수명 매칭 필요
        usernameField: 'userEmail',
        passwordField: 'userPw',
        session : true
    },
        function (username, password, done) {
            var userEmail = username;
            var userPw = password;
            console.log(userEmail + ":" + userPw);
            let sql =
                'SELECT user_name AS userName, user_email AS userEmail, user_password AS userPw FROM project_x.member WHERE 1=1 AND user_email =? AND user_password = sha2(md5(?), "256")';

            connMysql.query(sql, [userEmail, userPw], function (err, user) {
                if (err) {
                    console.log(err);
                    res.status(500);
                } else {
                    console.log("이메일 조회 완료 !!!!!!!!");
                    if (typeof user == "undefined" || user == null || user == "") {
                        return done(null, false, { message : "비밀번호가 잘못되었습니다" } );
                    } else {
                        console.log("로그인 성공!! 이메일과 비밀번호가 일치함!");
                        user = {
                            userEmail: user[0].userEmail,
                            userName: user[0].userName,
                            userPw: user[0].userPw
                        };
                       // user = JSON.stringify(user);
                       //user = JSON.parse(JSON.stringify(user));
                        console.log("DB 조회 후 user 데이터 >>>>>>>" + user);
                        return done(null, user);
                    }
                }
            });   
        }
    ));


    // passport.use(new LocalStrategy(
    //     function (username, password, done) {
    //         var uname = username;
    //         var pwd = password;
    //         console.log(uname + ":" + pwd);
    //         var sql = "SELECT * FROM users WHERE authId=?";
    //         conn.query(sql, ['local:' + uname], function (err, results) {
    //             console.log(results);
    //             if (err) {
    //                 return done('There is no user');
    //             }
    //             var user = results[0];
    //             return hasher({ password: pwd, salt: user.salt }, function (err, pass, salt, hash) {
    //                 if (hash === user.password) {
    //                     console.log('LocalStrategy', user);
    //                     done(null, user);
    //                 } else {
    //                     done(null, false);
    //                 }
    //             });
    //         });
    //         // for (var i=0; i<users.length; i++){
    //         // 	var user = users[i];
    //         // 	if (uname === user.username){
    //         // 		return hasher({password: pwd, salt:user.salt}, function(err, pass, salt, hash) {
    //         // 			if (hash === user.password) {
    //         // 				console.log('LocalStrategy', user);
    //         // 				done(null, user);
    //         // 				// req.session.displayName = user.displayName;
    //         // 				// req.session.save(function() {
    //         // 				// 	res.redirect('/welcome');
    //         // 				// });
    //         // 			} else {
    //         // 				done(null, false);
    //         // 			}
    //         // 		});
    //         // 	}
    //         // } 
    //         // done(null, false);
    //         // 	res.send('who are you? <a href="/auth/login">login</a>');
    //     }
    // ));
    return passport;
}