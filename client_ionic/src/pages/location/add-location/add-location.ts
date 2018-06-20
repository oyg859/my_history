import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, DateTime } from 'ionic-angular';
import { AddCategoryPage } from '../../category/add-category/add-category';

/**
 * Generated class for the AddLocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-location',
  templateUrl: 'add-location.html',
})
export class AddLocationPage {
 
  currentArea:string;   // 현재 지역명 (상단)
  currentLocation:string;   // 현재 위치 (세부 영역)
  rating:number;    // 평점 (해당 위치의)
  visitDate:Date;   // 방문일 
  regTime: DateTime     // 게시글 등록일시
  categorizeLocation:string     // 위치 분류  (ex: 음식점, 관광지, 숙박시설 등)
  locationPic:string    // 위치 사진 경로
  locationContent:string    // 위치 게시글 본문 

//////// placeHolder //////////
  currentLocationPlaceHolder:string = "현재 위치:  바르다 김선생";
  visitDatePlaceHolder:string = "오늘 방문";
  categorizeLocationPlaceHolder:string = "위치 분류";
  locationPicPlaceHolder:string = "사진 등록";
  locationContentPlaceHolder:string = "여기서 무슨일이 있었나요?";

  

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private appCtrl:App) {

      this.currentArea = "화곡 1동";

 
    };

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddLocationPage');
  }

}
