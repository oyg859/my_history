import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ServerProvider } from '../../providers/server/server';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-join',
  templateUrl: 'join.html',
})
export class JoinPage {

  @ViewChild ('emailInput') mailInput;

  joinForm: FormGroup;
 
  resultText:string = "";

  userEmail:string;
  userPw:string;
  userName:string;

  userEmailPlaceHolder:string = "이메일 입력";
  userPwPlaceHolder:string = "비밀번호 입력";
  userNamePlaceHolder:string = "이름 입력";

  constructor(private serverProvider:ServerProvider, public navCtrl: NavController, public navParams: NavParams, 
    private alertController: AlertController) {

    // 유저 이메일 확인 정규식 
    let emailValid = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

		// 유저 비밀번호 "영문", "숫자", "특수문자" 입력여부체크 정규식
    let passwordValid = /([a-zA-Z0-9].*[!,@,#,$,%,^,&,*,?,_,~])|([!,@,#,$,%,^,&,*,?,_,~].*[a-zA-Z0-9])/;

      this.joinForm = new FormGroup({
        userEmailForm: new FormControl('', [Validators.maxLength(30), Validators.pattern(emailValid), Validators.required]),
        userPwForm: new FormControl('', [Validators.minLength(8), Validators.maxLength(20), Validators.pattern(passwordValid), Validators.required]),
        userNameForm: new FormControl('', [Validators.minLength(2), Validators.maxLength(20), Validators.required])
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JoinPage.');
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
       this.resultText = "<ion-item>동일한 이메일이 존재합니다.<ion-item>";
          
       return true;
     }else{
      console.log("사용 가능한 이메일.");
      this.resultText = "<ion-item>사용 가능한 이메일<ion-item>";
      return true;
       }
     },(err)=>{
       console.log("post-에러: "+JSON.stringify(err));
   });
  }

  doJoin(){
    console.log("user 이메일: "+ this.userEmail);
    console.log("user 비밀번호: "+ this.userPw);
    console.log("user 이름: "+ this.userName);
  
    let body = 'userEmail=' + this.userEmail + '&userPw=' + this.userPw + '&userName=' + this.userName;
    let url = "/member/doJoin";

    this.serverProvider.post(url, body).then((res:any)=>{
      let response = JSON.stringify(res);
      console.log("응답 결과: "+ response);

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
        let alert = this.alertController.create({
          title: "서버와 통신 문제 발생",
          buttons:['OK~!!']
        });
        console.log("post-에러 출력 합니다~~!!: "+JSON.stringify(err));
    });
  }
}
