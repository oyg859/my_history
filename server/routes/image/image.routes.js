/**
 * @author    Oh young jun
 */


    //var app = require('../../config/express');
    var app = require('express');
    var router = app.Router();
    var controller = require('./image.controller');
    var imageUtils = require('../Utils/image.utils');
 
    
    console.log("이미지 라우트 진입!!~~~~~~~~~~~~~~~~~qewe~");

    router.post('/', imageUtils.upload.single('image'), controller.uploadsImage); // 이미지 업로드
    router.post('/', controller.uploadsImage); // 이미지 업로드
    router.get('/', controller.getImages); // 이미지 여러개 가져오기
    router.get('/:id', controller.getImage); // 특정 이미지 한개 가져오기
    router.delete('/:id', controller.deleteImage); // 이미지 제거
   
        
module.exports = router;