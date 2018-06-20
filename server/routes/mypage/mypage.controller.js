/**
 * Module dependencies.
 */
var mypage = require('./mypage.model');
var Promise = require('promise');
var async = require('async');

// var app = require('../../config/express')();
var app = require('express')();

// routes.viewMypageHistory 처리
exports.viewMypageHistory = (req, res) => {
    let userEmail = "";

    console.log("마이페이지 조회용_ user 유저 패스포트 세션 정보: " + JSON.stringify(req.user));
    console.log("마이페이지 조회용_user 이메일 패스포트 세션 정보: " + JSON.stringify(req.session.userEmail));

        if (typeof req.session.userEmail == "undefined" || req.session.userEmail == null || req.session.userEmail == ""){
            console.log("세션이 undefined 인 경우는 아래 것이 실행됨");
          
            let aa = JSON.parse(req.user);
            console.log(" 실행 내역 유저 데이터 확인: " + aa);
            console.log(" 실행 내역 유저 데이터 확인: " + req.user.userEmail);
        }

         userEmail =  JSON.parse(JSON.stringify(req.session.userEmail));
        console.log("user 패스포트 이메일 세션에서 가져온 정보: " + userEmail);
    
        // 마이페이지_히스토리 데이터 조회 (json 데이터)
        mypage.getMyhistory(userEmail).then((myHistoryInfo) => {
            console.log("결과 데이터: >>" + myHistoryInfo.result);
            res.json(myHistoryInfo);
        }).catch((err) => {
            console.log(err);
        });

}

