var imageUtils = require('../Utils/image.utils');
var Promise = require('promise');
var async = require('async');
var async = require('fs');
var imageUtils = require('../Utils/image.utils');

var app = require('express')();
var multer = require('multer');

// routes.uploadsImage 처리_  이미지 업로드
exports.uploadsImage = (req, res) => {
    //let newImage = new Image();
    //newImage.filename = req.file.filename;
    //newImage.originalName = req.file.originalName;
    //newImage.desc = req.body.desc;
    console.log("이미지 업로드 진행 하는 중");
  
    console.log("req.file 은??????????"+req.file);

    // imageUtils.upload(req, res, (err) =>{
    //     console.log("req.file: "+req.file);
    //    if(err){
    //        console.log(err);
    //    } else {
    //        console.log("이미지 업로드 성공");
    //    }
    // });

    // newImage.save(err => {
    //     if (err) {
    //         return res.sendStatus(400);
    //     }
    //     res.send("이미지 업로드 성공!");
    //    // res.sendStatus(201).json(newImage);
    // });

}

// routes.getImages 처리_  이미지 여러개 가져오기
exports.getImages = (req, res) => {
    console.log("여기가 이미지 업로드 인가?!");
}
// routes.getImage 처리_  특정 이미지 한개 가져오기
exports.getImage = (req, res) => {
    
}
// routes.deleteImage 처리_  이미지 제거
exports.deleteImage = (req, res) => {
    
}




