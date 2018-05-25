import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  userEmail:string;
  userPw:string;

  usernamePlaceHolder:string = "이메일 입력";
  userPwPlaceHolder:string = "비밀번호 입력";


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  doLogin(){
    console.log("user 이메일: "+ this.userEmail);
    console.log("user 비밀번호: "+ this.userPw);
  }
}
