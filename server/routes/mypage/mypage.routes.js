/**
 * @author    Oh young jun
 */
    //var app = require('../../config/express');
    var app = require('express');
    var router = app.Router();
    var controller = require('./mypage.controller');
    
    router.post('/viewMypageHistory', controller.viewMypageHistory);
    // router.post('/viewMypageHistory', function (){
    //     console.log("로그좀 출력 합시다!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    // }); 


module.exports = router;
