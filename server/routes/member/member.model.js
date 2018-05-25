/**
 * Module dependencies.
 */
var connMysql = require('../../config/mysql')();
var Promise = require('promise');

var sum = function (a, b){
    return a+b;
}
var checkLogin = function checkLogin(userEmail, userPw){
    return new Promise(function(resolved, rejected){
        userPw = "f7e6b5508619c1549ed4d9f0db4e0e76fe83b9168cd908f7704c7f3b74e4c9b9";
        console.log("userEmail:::::::::::::::"+userEmail);
        console.log("userPw:::::::::::::::::::"+ userPw);
        let sql2 = 
    //    'SELECT user_name AS userName, user_email AS userEmail, user_password AS userPassword FROM member WHERE 1=1 AND user_email =? AND user_password= ?';
        'SELECT user_name AS userName, user_email AS userEmail, user_password AS userPw FROM project_x.member WHERE 1=1 AND user_email =? AND user_password=?';
    
        connMysql.query(sql2, [userEmail, userPw], function (err, rows, fields) {
                if (err) {
                    console.log(err);
                    res.status(500);
                } else {  
                    console.log("로그인 성공!");
                    
                    userInfo = {
                    userEmail: rows[0].userEmail,
                    userName: rows[0].userName,
                    userPw: rows[0].userPw};
                    userInfo = JSON.stringify(userInfo);
                    console.log("DB 후 유저 인포>>>>>>>"+userInfo);
                    //return userInfo;     
                    resolved(userInfo+"님아~~~~~~~~~~!!!!!!!");
                }
            }); 
    });
}

module.exports = {
    checkLogin : checkLogin,
    sum : sum
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