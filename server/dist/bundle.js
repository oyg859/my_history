!function(e){var o={};function s(r){if(o[r])return o[r].exports;var n=o[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=o,s.d=function(e,o,r){s.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:r})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,o){if(1&o&&(e=s(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var n in e)s.d(r,n,function(o){return e[o]}.bind(null,n));return r},s.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(o,"a",o),o},s.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},s.p="",s(s.s=33)}([function(e,o){e.exports=require("express")},function(e,o){e.exports=require("promise")},function(e,o){e.exports=require("async")},function(e,o,s){e.exports=function(){var e=s(24).createConnection({host:"localhost",user:"root",password:"admin",database:"project_x"});return e.connect(),e}},function(e,o,s){var r=s(17),n=r.diskStorage({destination:function(e,o,s){s(null,"/uploads")},filename:function(e,o,s){s(null,o.fieldname+"-"+Date.now())}}),t=r({storage:n});e.exports={upload:t,storage:n}},function(e,o,s){e.exports=function(e){var o=s(3)(),r=s(23),n=s(22),t=s(21).Strategy,l=(s(20).Strategy,r(),s(6));return e.use(l({secret:"SomethingPowerfulSecret"})),e.use(n.initialize()),e.use(n.session()),n.serializeUser(function(e,o){console.log("serializeUser 유저~!!!",e),console.log("serializeUser user.userEmail === 반환값 =>>>",e),o(null,e.userEmail)}),n.deserializeUser(function(e,s){console.log("desirialize:   ",e);o.query("SELECT user_name AS userName, user_email AS userEmail FROM project_x.member WHERE user_email=?",[e],function(e,o){return e?(console.log("쿼리 실행 후 에러 발생 내역:  "+e),s(null,!1)):(console.log("데이터 조회 완료입니다~!!!!"),void 0===o||null==o||""==o?(console.log("동일 이메일 존재 안함 !!!!!!!!"),s(null,!1)):(console.log("동일 유저 존재함~!!!!!!!!"),console.log("데이터 조회 한 user 정보  :   >>  "+JSON.stringify(o)),console.log("데이터 조회 한 user 정보  :   >>  "+o),s(null,o)))})}),n.use(new t({usernameField:"userEmail",passwordField:"userPw",session:!0},function(e,s,r){var n=e,t=s;console.log(n+":"+t);o.query('SELECT user_name AS userName, user_email AS userEmail, user_password AS userPw FROM project_x.member WHERE 1=1 AND user_email =? AND user_password = sha2(md5(?), "256")',[n,t],function(e,o){if(!e)return console.log("이메일 조회 완료 !!!!!!!!"),void 0===o||null==o||""==o?r(null,!1,{message:"비밀번호가 잘못되었습니다"}):(console.log("로그인 성공!! 이메일과 비밀번호가 일치함!"),o={userEmail:o[0].userEmail,userName:o[0].userName,userPw:o[0].userPw},console.log("DB 조회 후 user 데이터 >>>>>>>"+o),r(null,o));console.log(e),res.status(500)})})),n}},function(e,o){e.exports=require("express-session")},function(e,o){e.exports=require("mm-node-logger")},function(e,o){var s={environment:"production"};s.server={host:"http://ec2-13-209-77-58.ap-northeast-2.compute.amazonaws.com",port:process.env.NODE_PORT||process.env.PORT||3e3},e.exports=s},function(e){e.exports={name:"server_side_javascript",version:"1.0.0",description:"Server side javascript tutorials",main:"app.js",start:"nodemon app.js --exec babel-node",scripts:{test:'echo "Error: no test specified" && exit 1',build:"webpack --mode production",dev:"webpack-dev-server --mode development"},author:"",license:"ISC",dependencies:{async:"^2.6.0","body-parser":"^1.18.2",cors:"^2.8.4",del:"^3.0.0",ejs:"^2.6.1",express:"^4.16.3","express-mysql-session":"^1.3.0","express-session":"^1.15.6",fs:"0.0.1-security",jade:"^1.11.0",md5:"^2.2.1","method-override":"^2.3.10","mm-node-logger":"0.0.1",moment:"^2.22.1",mongodb:"^3.1.0",mongoose:"^5.1.7",morgan:"^1.9.0",multer:"^1.3.0","node-mysql":"^0.4.2","node-then":"^0.1.0",passport:"^0.4.0","passport-facebook":"^2.1.1","passport-local":"^1.0.0",path:"^0.12.7","pbkdf2-password":"^1.2.1",promise:"^8.0.1","session-file-store":"^1.2.0",sha256:"^0.2.0",supervisor:"^0.12.0",underscore:"^1.8.3",winston:"^2.4.2","winston-daily-rotate-file":"^3.1.4"},devDependencies:{"@babel/core":"^7.0.0-beta.52","@babel/node":"^7.0.0-beta.52","@babel/preset-env":"^7.0.0-beta.52","serviceworker-webpack-plugin":"^1.0.0-alpha02","uglifyjs-webpack-plugin":"^1.2.7",webpack:"^4.15.1","webpack-cli":"^3.0.8","webpack-dev-server":"^3.1.4","webpack-node-externals":"^1.7.2"}}},function(e,o,s){var r=s(3)(),n=s(1);e.exports={checkLogin:function(e,o){return new n(function(s,n){console.log("userEmail:::::::::::::::"+e),console.log("userPw:::::::::::::::::::"+o),r.query('SELECT user_name AS userName, user_email AS userEmail, user_password AS userPw FROM project_x.member WHERE 1=1 AND user_email =? AND user_password = sha2(md5(?), "256")',[e,o],function(e,o,r){e?(console.log(e),res.status(500)):(console.log("이메일 조회 완료 !!!!!!!!"),void 0===o||null==o||""==o?(resultCheckEmail={result:"false"},console.log("이메일과 비밀번호가 일치하지 않음 !!!!!!!!"),s(resultCheckEmail)):(console.log("로그인 성공_이메일과 비번 일치!"),userInfo={userEmail:o[0].userEmail,userName:o[0].userName,userPw:o[0].userPw},userInfo=JSON.stringify(userInfo),console.log("DB 조회후 userInfo 저장내역 >>>>>>>"+userInfo),s(userInfo+"님아~~~~~~~~~~!!!!!!!")))})})},joinMember:function(e,o,s){return new n(function(n,t){console.log("userEmail:::::::::::::::"+e),console.log("userPw:::::::::::::::::::"+o),console.log("userName:::::::::::::::::::"+s),r.query('INSERT INTO project_x.member(`user_key`, `user_email`, `user_password`,  `user_name`, `join_date`) VALUES (sha2(md5(random_bytes(64)), "256"), ? , sha2(md5(?), "256"), ?, now())',[e,o,s],function(o,r,t){o?(console.log(o),res.status(500)):(console.log("회원가입 성공!!!!!!!!"),user={userEmail:e,userName:s,result:"success"},console.log(user),n(user))})})},getEmail:function(e){return new n(function(o,s){console.log("userEmail:::::::::::::::"+e);let n={};r.query("SELECT user_email AS userEmail FROM project_x.member WHERE user_email = ?",[e],function(e,s,r){e?(console.log(e),res.status(500)):(console.log("이메일 조회 완료 !!!!!!!!"),void 0===s||null==s||""==s?(n={result:"false"},console.log("이메일 존재 안함 !!!!!!!!"),o(n)):(console.log("이메일 존재함 !!!!!!!!"),n={result:"true",userEmail:s[0].userEmail,userName:s[0].userName},o(n)))})})}}},function(e,o,s){var r=s(10),n=(s(1),s(2),s(0)()),t=s(5)(n);o.doLogin=((e,o,s)=>{t.authenticate("local",function(r,n,t){return r?s(r):n?(console.log("user ~~?"+n),console.log("user 이메일은 은~~?"+JSON.stringify(e.user)),console.log("user 이메일은 스트링파이 미적용~~?"+e.user),console.log("user 네임은~~~?"+JSON.stringify(e.session.userName)),console.log("user 정보는~~~?"+JSON.stringify(n.userEmail)),userInfo={userEmail:n.userEmail,userName:n.userName},void e.login(n,function(s){e.session.save(function(){e.session.userName=n.userName,e.session.userEmail=n.userEmail,console.log("AAAAAAAAA"+JSON.stringify(e.user)),console.log("AAAAAA 스트링파이 미적용: "+e.user.userName),console.log("AAAAAA 세션에서 불러온 데이터: "+e.session.userName),o.json(JSON.stringify(userInfo)),console.log("유저 인포는???"+JSON.stringify(userInfo))})})):o.send({success:!1,message:"authentication failed"})})(e,o,s)}),o.doLogout=((e,o)=>{e.logout(),o.json("로그아웃 응답 전송")}),o.goJoinPage=((e,o)=>{}),o.doJoin=((e,o)=>{let s=e.body.userEmail,n=e.body.userPw,t=e.body.userName;console.log("user 이메일: "+s+"userPW: "+n+"userName: "+t),r.joinMember(s,n,t).then(s=>{console.log("결과 데이터: >>"+JSON.stringify(s)),e.login(s,function(r){e.session.save(function(){console.log("가입 후 세션 데이터 이메일: "+e.user.userEmail),console.log("가입 후 세션 유저 이름~~: "+e.user.userName),o.json(s)})})}).catch(e=>{console.log(e)})}),o.checkExistEmail=((e,o)=>{let s=e.body.userEmail;console.log("user 이메일 정보: "+s),r.getEmail(s).then(e=>{console.log("결과 데이터: >>"+e.result),o.json(e)}).catch(e=>{console.log(e)})})},function(e,o,s){var r=s(0).Router(),n=s(11);r.post("/doLogin",n.doLogin),r.post("/doLogout",n.doLogout),r.post("/doJoin",n.doJoin),r.post("/checkExistEmail",n.checkExistEmail),e.exports=r},function(e,o,s){var r=s(3)(),n=s(1);e.exports={getMyhistory:function(e){return new n(function(o,s){console.log(e);let n={};r.query("SELECT user_email AS userEmail, user_name AS userName FROM project_x.member WHERE user_email = ?",[e],function(e,s,r){e?(console.log(e),res.status(500)):(console.log("이메일 조회 완료 !!!!!!!!"),void 0===s||null==s||""==s?(n={result:"false"},console.log("이메일 존재 안함 !!!!!!!!"),o(n)):(console.log("이메일 존재함 !!!!!!!!"),n={result:"true",userEmail:s[0].userEmail,userName:s[0].userName},o(n)))})})}}},function(e,o,s){var r=s(13);s(1),s(2),s(0)();o.viewMypageHistory=((e,o)=>{let s="";if(console.log("마이페이지 조회용_ user 유저 패스포트 세션 정보: "+JSON.stringify(e.user)),console.log("마이페이지 조회용_user 이메일 패스포트 세션 정보: "+JSON.stringify(e.session.userEmail)),void 0===e.session.userEmail||null==e.session.userEmail||""==e.session.userEmail){console.log("세션이 undefined 인 경우는 아래 것이 실행됨");let o=JSON.parse(e.user);console.log(" 실행 내역 유저 데이터 확인: "+o),console.log(" 실행 내역 유저 데이터 확인: "+e.user.userEmail)}s=JSON.parse(JSON.stringify(e.session.userEmail)),console.log("user 패스포트 이메일 세션에서 가져온 정보: "+s),r.getMyhistory(s).then(e=>{console.log("결과 데이터: >>"+e.result),o.json(e)}).catch(e=>{console.log(e)})})},function(e,o,s){var r=s(0).Router(),n=s(14);r.post("/viewMypageHistory",n.viewMypageHistory),e.exports=r},function(e,o){e.exports=require("fs")},function(e,o){e.exports=require("multer")},function(e,o,s){s(4),s(1),s(2),s(16),s(0)();o.uploadsImage=((e,o)=>{let s=new Image;s.filename=e.file.filename,s.originalName=e.file.originalName,s.desc=e.body.desc,console.log("이미지 업로드 진행 하는 중"),s.save(e=>{if(e)return o.sendStatus(400);o.send("이미지 업로드 성공!")})}),o.getImages=((e,o)=>{console.log("여기가 이미지 업로드 인가?!")}),o.getImage=((e,o)=>{}),o.deleteImage=((e,o)=>{})},function(e,o,s){var r=s(0).Router(),n=s(18),t=s(4);console.log("이미지 라우트~~~~~~~~~~~~~~~~~qewe~"),r.post("/",t.upload.single("image"),n.uploadsImage),r.get("/",t.upload.single("image"),n.getImages),r.get("/:id",n.getImage),r.delete("/:id",n.deleteImage),e.exports=r},function(e,o){e.exports=require("passport-facebook")},function(e,o){e.exports=require("passport-local")},function(e,o){e.exports=require("passport")},function(e,o){e.exports=require("pbkdf2-password")},function(e,o){e.exports=require("mysql")},function(e,o){e.exports=require("path")},function(e,o){e.exports=require("morgan")},function(e,o){e.exports=require("cors")},function(e,o){e.exports=require("body-parser")},function(e,o){e.exports=require("session-file-store")},function(e,o,s){(function(o){e.exports=function(){var e=s(0),r=s(6),n=s(29)(r),t=s(28),l=(s(27),s(26),s(25)),u=e();u.use(r({secret:"1234DDSSDSD23@@@@@",resave:!1,saveUninitialized:!0,store:n()}));s(5)(u);console.log("오긴왔나~~~~~~~~");var i=s(19),a=s(15),c=s(12);return u.set("view engine","html"),u.set("views",o+"../../client_ionic/src/pages/**"),u.use(e.static(l.join(o+"pages/**"))),u.use(t.urlencoded({extended:!1})),u.use("/mypage",a),u.use("/member",c),u.use("/images",i),u.get("/a",function(e,o){o.send("왔어")}),u.get("/a",function(e,o){o.send("성공")}),u}}).call(this,"/")},function(e,o){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,o,s){(function(e){var o=s(30)(),r=s(9),n=s(8),t=s(7)(e);o.use(function(e,o,s){s(createError(404))}),o.use(function(e,o,s,r){s.locals.message=e.message,s.locals.error="development"===o.app.get("env")?e:{},s.status(e.status||500),s.send("error")}),o.listen(n.server.port,function(){console.log("3000 포트 접속함!!");var e=["","*************************************"+" EXPRESS SERVER ".yellow+"********************************************","*","* "+r.description,"* @version "+r.version,"* @author "+r.author.name,"* @copyright "+(new Date).getFullYear()+" "+r.author.name,"* @license "+r.license.type+", "+r.license.url,"*","*"+" App started on port: ".blue+n.server.port+" - with environment: ".blue+n.environment.blue,"*","*************************************************************************************************",""].join("\n");t.info(e)})}).call(this,s(31)(e))},function(e,o,s){e.exports=s(32)}]);