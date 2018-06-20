import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the AddRatingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-rating',
  templateUrl: 'add-rating.html',
})
export class AddRatingPage {

  //변수 설정
  reviewItemName:string;    // 리뷰할 항목 이름
  itemRating:number;    // 리뷰항목의 평점 



  constructor(public navCtrl: NavController,
    public viewCtrl: ViewController, public navParams: NavParams) {


  // 임의 지정
  this.reviewItemName = "[와인] 몬테스 알파";
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddRatingPage');
  }

  
  closeModal(data) {
    let Rating = 4.2;
    this.viewCtrl.dismiss(Rating);
  }

}
