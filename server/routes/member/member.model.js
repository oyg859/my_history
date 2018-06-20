/**
 * Module dependencies.
 */
var connMysql = require('../../config/mysql')();
var Promise = require('promise');


// exports.doLogin 함수 처리 :  유저이메일 & 패스워드 DB 존재여부 체크
var checkLogin = function checkLogin(userEmail, userPw) {
    return new Promise(function (resolved, rejected) {

        console.log("userEmail:::::::::::::::" + userEmail);
        console.log("userPw:::::::::::::::::::" + userPw);
        let sql =
            //    'SELECT user_name AS userName, user_email AS userEmail, user_password AS userPassword FROM member WHERE 1=1 AND user_email =? AND user_password= ?';
            'SELECT user_name AS userName, user_email AS userEmail, user_password AS userPw FROM project_x.member WHERE 1=1 AND user_email =? AND user_password = sha2(md5(?), "256")';

        connMysql.query(sql, [userEmail, userPw], function (err, rows, fields) {
            if (err) {
                console.log(err);
                res.status(500);
            } else {
                console.log("이메일 조회 완료 !!!!!!!!");
                // let userEmail = rows[0].userEmail; 
                if (typeof rows == "undefined" || rows == null || rows == "") {
                    resultCheckEmail = {
                        result: "false"
                    };
                    console.log("이메일과 비밀번호가 일치하지 않음 !!!!!!!!");
                    resolved(resultCheckEmail);
                } else {
                    console.log("로그인 성공_이메일과 비번 일치!");
                    userInfo = {
                        userEmail: rows[0].userEmail,
                        userName: rows[0].userName,
                        userPw: rows[0].userPw
                    };
                    userInfo = JSON.stringify(userInfo);
                    console.log("DB 조회후 userInfo 저장내역 >>>>>>>" + userInfo);
                    //return userInfo;     
                    resolved(userInfo + "님아~~~~~~~~~~!!!!!!!");
                }
            }
        });
    });
}

// exports.doJoin 함수 처리
var joinMember = function joinMember(userEmail, userPw, userName){
    return new Promise(function(resolved, rejected){
        console.log("userEmail:::::::::::::::"+userEmail);
        console.log("userPw:::::::::::::::::::"+ userPw);
        console.log("userName:::::::::::::::::::"+ userName);
        let sql = 
        'INSERT INTO project_x.member(`user_key`, `user_email`, `user_password`,  `user_name`, `join_date`) VALUES (sha2(md5(random_bytes(64)), "256"), ? , sha2(md5(?), "256"), ?, now())';
    
        connMysql.query(sql, [userEmail, userPw, userName], function(err, rows, fields){
            if(err){
                console.log(err);
                res.status(500);
            } else {
                console.log("회원가입 성공!!!!!!!!");

                user = {
                    userEmail : userEmail,
                    userName : userName,
                    result : "success"  };               
                console.log(user);
                resolved(user);
            }
        });
    });
}

// exports.checkExistEmail 함수 처리
var getEmail = function getEmail(userEmail){
    return new Promise(function(resolved, rejected){
        console.log("userEmail:::::::::::::::" + userEmail);
        let sql = 
        'SELECT user_email AS userEmail FROM project_x.member WHERE user_email = ?';
        let resultCheckEmail = {};

        connMysql.query(sql, [userEmail], function(err, rows, fields){
            if(err){
               
                console.log(err);
                res.status(500);
            } else {
                console.log("이메일 조회 완료 !!!!!!!!"); 
                // let userEmail = rows[0].userEmail; 
                if (typeof rows == "undefined" || rows == null || rows == "") {
                    resultCheckEmail = {
                        result: "false"
                    };
                    console.log("이메일 존재 안함 !!!!!!!!");   
                    resolved(resultCheckEmail);
                } else {
                console.log("이메일 존재함 !!!!!!!!");
                resultCheckEmail = {
                    result: "true",
                    userEmail : rows[0].userEmail,
                    userName : rows[0].userName
                }; 
                resolved(resultCheckEmail);
            }
        }
    });
});
}

module.exports = {
    checkLogin : checkLogin,
    joinMember : joinMember,
    getEmail : getEmail
};

// exports.checkLogin = function(userEmail, userPw, req, res){
//     console.log(userEmail+userPw);
//     // 패스워드 암호화
//     let sql = 'SELECT sha2(md5(?), "256")'; 
//     connMysql.query(sql, [userPw], function(err, rows, encryptedPass){
//         if(err){
//             console.log(err);
//             res.status(500);
//         } else{  // 유저 비밀번호 암호화 성공 후, 유저 정보 가져오기
//             console.log(encryptedPass);
//             console.log(rows);
//             console.log(sql);
//             let sql2 = 
//         //    'SELECT user_name AS userName, user_email AS userEmail, user_password AS userPassword FROM member WHERE 1=1 AND user_email =? AND user_password= ?';
//             'SELECT user_name, user_email FROM project_x.member WHERE 1=1 AND user_email =? AND user_password=?';
        
//             connMysql.query(sql2, [userEmail, userPw], function (err, rows, fields) {
//                     if (err) {
//                         console.log(err);
//                         res.status(500);
//                     } else {  
//                         console.log("로그인 성공!");
//                         console.log(rows);
                        
//                         return rows;
//                     }
//                 });
//         }
//     });
// }