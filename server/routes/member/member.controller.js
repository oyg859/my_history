/**
 * Module dependencies.
 */
var member = require('./member.model');
var Promise = require('promise');
var async = require('async');

exports.goLoginPage = (req, res) => {
    res.render('login');
};

exports.doLogin = (req, res) => {

    let userEmail = req.body.userEmail;
    let userPw = req.body.userPw;
    console.log("user 이메일: "+ userEmail+"user 패스워드: "+ userPw);

    // userInfo 는 model.js 의 유저조회 결과 (json 데이터)
    member.checkLogin(userEmail, userPw).then((userInfo) => {
        console.log("check 로그인 함수 끝나고 결과값은?>>>>>>>>"+userInfo);
        
        res.json(userInfo);
       
    }).catch((err) => {
        console.log(err);
    });
    
    // function findById(req, res) {
    //     return User.findById(req.params.id, 'name email avatar', function (err, user) {
    //         if (err) {
    //             logger.error(err.message);
    //             return res.status(400).send(err);
    //         } else {
    //             res.json(user);
    //         }
    //     });
    // }

}
         
exports.doLogout = (req, res) => {

};
exports.goJoinPage = (req, res) => {

};

// 로그인 실행 처리
exports.doJoin = (req, res) => {
    let userEmail = req.body.userEmail;
    let userPw = req.body.userPw;
    let userName = req.body.userName;
    console.log("user 이메일: " + userEmail + "userPW: " + userPw + "userName: " + userName);

    //userInfo 는 model.js 의 회원가입 결과 (json 데이터)
    member.joinMember(userEmail, userPw, userName).then((userInfo) => {
        console.log("결과 데이터: >>" + userInfo);
        // 세션에 유저 이름 저장
        // req.session.displayName = userName; 
        
        // req.session.save(function(){
             res.json(userInfo);
        // });
        

    }).catch((err) => {
        console.log(err);
    });
}

// 이메일 존재여부 체크 처리
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
