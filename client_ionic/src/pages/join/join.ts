import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ServerProvider } from '../../providers/server/server';


@IonicPage()
@Component({
  selector: 'page-join',
  templateUrl: 'join.html',
})
export class JoinPage {

  userEmail:string;
  userPw:string;
  userName:string;

  usernamePlaceHolder:string = "이메일 입력";
  userPwPlaceHolder:string = "비밀번호 입력";
  userNamePlaceHolder:string = "이름 입력";

  constructor(private serverProvider:ServerProvider, public navCtrl: NavController, public navParams: NavParams, 
    private alertController: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JoinPage');
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
