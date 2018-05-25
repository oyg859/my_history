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
    
    // userInfo 는 model.js 의 유저조회 결과 (json 데이터)
    member.checkLogin(userEmail, userPw).then((userInfo) => {
        console.log("check 로그인 함수 끝나고 결과값은?>>>>>>>>"+userInfo);
        res.json(userInfo);
    }).catch((err) => {
        console.log(err);
    });
    
     console.log("끝이야~~~~~~~~~~~~~~~~~~~~~~~anjd야");

    

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
exports.doJoin = (req, res) => {

};
exports.checkDuplicateEmail = (req, res) => {

};