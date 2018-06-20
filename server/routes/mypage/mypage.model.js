/**
 * Module dependencies.
 */
var connMysql = require('../../config/mysql')();
var Promise = require('promise');


// exports.viewMypageHistory 함수 처리
var getMyhistory = function getMyhistory(userEmail){
    return new Promise(function(resolved, rejected){


        console.log(userEmail);

        let sql = 
        'SELECT user_email AS userEmail, user_name AS userName FROM project_x.member WHERE user_email = ?';
        let myHistoryInfo = {};

        connMysql.query(sql, [userEmail], function(err, rows, fields){
            if(err){

                console.log(err);
                res.status(500);
            } else {
                console.log("이메일 조회 완료 !!!!!!!!"); 
                if (typeof rows == "undefined" || rows == null || rows == "") {
                    myHistoryInfo = {
                        result: "false"
                    };
                    console.log("이메일 존재 안함 !!!!!!!!");   
                    resolved(myHistoryInfo);
                } else {
                console.log("이메일 존재함 !!!!!!!!");
                myHistoryInfo = {
                    result: "true",
                    userEmail : rows[0].userEmail,
                    userName : rows[0].userName
                }; 
                resolved(myHistoryInfo);
            }
        }
    });
});
}

module.exports = {
    getMyhistory : getMyhistory
};
