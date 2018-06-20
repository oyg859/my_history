/**
 * @author    Oh young jun
 */


    //var app = require('../../config/express');
    var app = require('express');
    var router = app.Router();
    var controller = require('./member.controller');
    
    router.post('/doLogin', controller.doLogin);
    router.post('/doLogout', controller.doLogout);
    router.post('/doJoin', controller.doJoin);
    router.post('/checkExistEmail', controller.checkExistEmail);
    // router.post('/goLoginPage', controller.goLoginPage);
    // router.post('/goTabsPage', controller.goTabsPage);
     
        
module.exports = router;