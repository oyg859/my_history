import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MypagePage } from '../../mypage/mypage';

   // rich-text code
import { FormControl, FormBuilder, FormGroup } from "@angular/forms";

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
  
  // ckeditor 지원 코드
  public htmlContent: string;

  // rich-text code
  item: FormControl;

  constructor(public navCtrl: NavController, public navParams: NavParams
  , private formBuilder: FormBuilder) {

      // ckeditor 지원 코드
      this.htmlContent = '';
  }

      // ckeditor 지원 코드
  htmlChanged(e) {
    this.htmlContent = e;
  }


  ionViewWillLoad() {
   
    console.log('ionViewDidLoad TabsHomeMainPage');
   // rich-text code
    this.item = this.formBuilder.control('');
  }

}
