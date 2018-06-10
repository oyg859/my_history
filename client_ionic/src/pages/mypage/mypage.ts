import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { LoginPage } from '../login/login';

/**
 * Generated class for the MypagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mypage',
  templateUrl: 'mypage.html',
})
export class MypagePage {

  mypageTab: string="history";

  constructor(public navCtrl: NavController, public navParams: NavParams, private app:App) {
    
    this.mypageTab = "history";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MypagePage');
  }

  goWritePage() {
    this.app.getRootNavs()[0].push('LoginPage');
  }

  goWritePag() {
    this.navCtrl.push('LoginPage');
  }

}
