/**
 * Module dependencies.
 */
var member = require('./member.model');
var Promise = require('promise');
var async = require('async');

// var app = require('../../config/express')();
var app = require('express')();

var passport = require('../../config/passport')(app);  


//passport 사용
// exports.doLogin = 
//     passport.authenticate(
//     'local',
//     {
//         successRedirect: '/#/login',
//         failureRedirect: '/',
//         failureFlash: false        
//     }
// );

exports.doLogin = (req, res, next) => {
    passport.authenticate(
        'local', function (err, user, info) {

            if (err) {
                return next(err); // will generate a 500 error
            }
            // Generate a JSON response reflecting authentication status
            if (!user) {
                return res.send({ success: false, message: 'authentication failed' });
            }
            console.log("user ~~?" + user);
            console.log("user 이메일은 은~~?" + JSON.stringify(req.user));
            console.log("user 이메일은 스트링파이 미적용~~?" + req.user);
            console.log("user 네임은~~~?" + JSON.stringify(req.session.userName));
            console.log("user 정보는~~~?" + JSON.stringify(user.userEmail));

            userInfo = {
                userEmail: user.userEmail,
                userName: user.userName
            }

            req.login(user, function (err) {
                req.session.save(function () {
                            
                    req.session.userName = user.userName;
                    req.session.userEmail = user.userEmail;
                    console.log("AAAAAAAAA" + JSON.stringify(req.user));
                    console.log("AAAAAA 스트링파이 미적용: " + req.user.userName);
                    console.log("AAAAAA 세션에서 불러온 데이터: " + req.session.userName);

                    res.json(JSON.stringify(userInfo));
                    console.log("유저 인포는???" + JSON.stringify(userInfo));
                });
            });
        })(req, res, next) 
}

// routers.doLogin 처리
// exports.doLogin = (req, res) => {

//     let userEmail = req.body.userEmail;
//     let userPw = req.body.userPw;
//     console.log("user 이메일: "+ userEmail+"user 패스워드: "+ userPw);

//     // userInfo 는 model.js 의 유저조회 결과 (json 데이터)
//     member.checkLogin(userEmail, userPw).then((userInfo) => {
//         console.log("check 로그인 함수 끝나고 결과값은?>>>>>>>>"+userInfo);
        
//         res.json(userInfo);
       
//     }).catch((err) => {
//         console.log(err);
//     });
// }
         
exports.doLogout = (req, res) => {
  //  delete req.session.userEmail;
    req.logout();
    res.json("로그아웃 응답 전송");
};
exports.goJoinPage = (req, res) => {

};

// routers.doJoin 처리
exports.doJoin = (req, res) => {
    let userEmail = req.body.userEmail;
    let userPw = req.body.userPw;
    let userName = req.body.userName;
    console.log("user 이메일: " + userEmail + "userPW: " + userPw + "userName: " + userName);

    //userInfo 는 model.js 의 회원가입 결과 (json 데이터)
    member.joinMember(userEmail, userPw, userName).then((user) => {
        console.log("결과 데이터: >>" + JSON.stringify(user));
        
        // passoport.js 에 저장된 로그인 함수 
        req.login(user, function(err){
            req.session.save(function(){ // 세션이 저장된 후 
                console.log("가입 후 세션 데이터 이메일: "+req.user.userEmail);
                console.log("가입 후 세션 유저 이름~~: "+req.user.userName);

                res.json(user);
            });
        });
        // 세션에 유저 이름 저장
        // req.session.displayName = userName; 
        
        // req.session.save(function(){
        //   res.json(userInfo);
        // });
        

    }).catch((err) => {
        console.log(err);
    });
}

// routes.checkExistEmail 처리_ 이메일 존재여부 체크 처리
exports.checkExistEmail = (req, res) => {
    let userEmail = req.body.userEmail;
    console.log("user 이메일 정보: " + userEmail);

    // 이메일 존재여부 체크 후 반환 (json 데이터)
    member.getEmail(userEmail).then((resultCheckEmail) => {
        console.log("결과 데이터: >>" + resultCheckEmail.result);
             res.json(resultCheckEmail);
    }).catch((err) => {
        console.log(err);
    });
}

// exports.goLoginPage = (req, res) => {

//     res.redirect('/');
// }

// exports.goTabsPage = (req, res) => {

//     res.redirect('/');
// }


