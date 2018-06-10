/**
 * @author    Oh young jun
 */

var express = require('express');
var router = express.Router();
var controller = require('./member.controller');


router.get('/goLoginPage', controller.goLoginPage);

router.post('/doLogin', controller.doLogin);

router.post('/doLogout', controller.doLogout);
router.post('/doJoin', controller.doJoin);
router.post('/checkExistEmail', controller.checkExistEmail);

module.exports = router;