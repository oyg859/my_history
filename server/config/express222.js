module.exports = function () {

    var express = require('express');
    var bodyParser = require('body-parser');
    var multer = require('multer');
    
    var _storage = multer.diskStorage({
      // 경로지정
      destination: function (req, file, cb) {
            cb(null, 'uploads');
     },
      // 파일명
      filename: function (req, file, cb) {
            cb(null, file.originalname);
      }
    });
    var upload = multer({ storage: _storage })
    var fs = require('fs');
    
    
    var app = express();
    // user 라는 라우터/파일명 입력시, (ex: http://localhost:3000/user/icon_create-profile.png) 
    app.use('/user', express.static('uploads'));
    
    app.set('view engine', 'jade');
    app.set('views', './views_file');
    app.locals.pretty = true;
    
    // 파일업로드 폼으로 이동
    app.get('/upload', function(req, res) {
        res.render('upload');
    })
    // 파일 업로드 제출시
    app.post('/upload', upload.single('userfile'), function(req, res) {
        console.log(req.file);
        res.send('Upload' + req.file.originalname);
    })
    
    app.use(bodyParser.urlencoded({ extended: false }));
    
    app.get('/topic/new', function(req, res) {
        // 경로에서 파일 목록 받기
        fs.readdir('data', function(err, files) {
            if(err){
            console.log(err);
            res.status(500).send('Internal Server Err');
            }
        
        res.render('new', {topics: files});
        });
    });
    
    app.get(['/topic', '/topic/:id'], function(req, res) {
        
        // 경로에서 파일 목록 받기
        fs.readdir('data', function(err, files) {
            if(err){
            console.log(err);
            res.status(500).send('Internal Server Err');
            }
            var id = req.params.id;
            if (id){
            // id 값이 있는경우
            fs.readFile('data/' + id, 'utf8', function(err, data) {
                if (err) {
                    console.log(err);
                    res.status(500).send('Internal Server Err');
                }
                    res.render('view', {topics:files, title: id, description: data});
                });
            } else {
                // id값이 없을 때
            res.render('view', {topics: files, title:'Welcome', description: '환영합니다. JavaScript for Server'});
            }
        });
    });
    /*app.get('/topic/:id', function(req, res) {
        var id = req.params.id;
        // 경로에서 파일 목록 받기
        fs.readdir('data', function(err, files) {
            if (err) {
                console.log(err);
                res.status(500).send('Internal Server Err');
            }
        });
    });*/
    app.post('/topic', function(req, res) {
        var title = req.body.title;
        var decription = req.body.description;
        fs.writeFile('data/'+title, decription, function(err) {
            if(err){
                console.log(err);
                res.status(500).send('Internal 서버 Error!');
            }
            res.redirect('/topic/'+ title);
        });
    
    });

    return app;
}