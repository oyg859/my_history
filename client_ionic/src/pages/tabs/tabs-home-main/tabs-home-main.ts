import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MypagePage } from '../../mypage/mypage';

/**
 * Generated class for the TabsHomeMainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs-home-main',
  templateUrl: 'tabs-home-main.html',
})
export class TabsHomeMainPage {


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsHomeMainPage');
  }

}
