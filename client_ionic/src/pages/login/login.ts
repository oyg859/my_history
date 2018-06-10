import { Component, OnInit, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ServerProvider } from '../../providers/server/server';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValueTransformer } from '@angular/compiler/src/util';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild('loginSlider') loginSlider: any;

  loginForm: FormGroup;
 
  resultText:string = "";

  userEmail:string;
  userPw:string;

  usernamePlaceHolder:string = "이메일 입력";
  userPwPlaceHolder:string = "비밀번호 입력";

  constructor(private serverProvider:ServerProvider, public navCtrl: NavController, public navParams: NavParams, 
    private alertController: AlertController, public formBuilder: FormBuilder ) {
    
    // 유저 이메일 확인 정규식 
    let emailValid = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

		// 유저 비밀번호 "영문", "숫자", "특수문자" 입력여부체크 정규식
    let passwordValid = /([a-zA-Z0-9].*[!,@,#,$,%,^,&,*,?,_,~])|([!,@,#,$,%,^,&,*,?,_,~].*[a-zA-Z0-9])/;

      this.loginForm = new FormGroup({
        userEmailForm: new FormControl('', [Validators.maxLength(30), Validators.pattern(emailValid), Validators.required]),
        userPwForm: new FormControl('', [Validators.minLength(8), Validators.maxLength(20), Validators.pattern(passwordValid), Validators.required])
      });

    }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  // 이메일 존재여부 체크 (유저 이메일 정보 입력 후)
  checkExistEmail($event){
    let body = 'userEmail='+ this.userEmail;
    let url = "/member/checkExistEmail";

    this.serverProvider.post(url, body).then((res:any)=>{
     
      let response = JSON.parse(JSON.stringify(res));
      console.log("응답 메일 값 result: "+ response.result);

     if (response.result.length > 0 && response.result == "true" ){
       console.log("회원 존재");
       this.resultText = "<ion-item>이메일 존재<ion-item>";
       return true;
     }else{
       let alert = this.alertController.create({
         title: '존재하지 않는 회원정보 입니다.',
         buttons: ['확인']
       });
       alert.present();
       }
     },(err)=>{
       console.log("post-에러: "+JSON.stringify(err));
   });
  }

  doLogin(){
    console.log("user 이메일: "+ this.userEmail);
    console.log("user 비밀번호: "+ this.userPw);
        
    //let url="http://127.0.0.1:3000/member/doLogin";
    //let url="http://localhost:8100/member/doLogin";
    //let body={userEmail: this.userEmail, userPw: this.userPw};
    //let headers = new HttpHeaders({'Content-Type': 'application/json'});
    //let headers = new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'});
    let body = 'userEmail='+ this.userEmail + '&userPw=' + this.userPw;
    let url = "/member/doLogin";

    this.serverProvider.post(url, body).then((res:any)=>{
       let response = JSON.parse(JSON.stringify(res));
      console.log("응답 메일 값: "+ response);


      if(response.length > 0){
        this.navCtrl.setRoot(TabsPage);
      }else{
        let alert = this.alertController.create({
          title: '존재하지 않는 회원정보 입니다.',
          buttons: ['확인']
        });
        alert.present();
        }
      },(err)=>{
        console.log("post-에러: "+JSON.stringify(err));
    });
  }
}
