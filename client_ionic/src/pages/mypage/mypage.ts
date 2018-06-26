import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, AlertController, MenuController, Nav } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ServerProvider } from '../../providers/server/server';
import { AutoHideDirective} from '../../directives/auto-hide/auto-hide';
import { AddHistoryPage } from '../history/add-history/add-history';
import { AddLocationPage } from '../location/add-location/add-location';
import { AddReviewPage } from '../review/add-review/add-review';
import { AddCategoryPage } from '../category/add-category/add-category';
import { HistoryMainPage } from '../history/history-main/history-main';
import { LocationMainPage } from '../location/location-main/location-main';
import { ReviewMainPage } from '../review/review-main/review-main';
import { TabsHomeMainPage } from '../tabs/tabs-home-main/tabs-home-main';
import { BucketlistMainPage } from '../bucketlist/bucketlist-main/bucketlist-main';


@IonicPage()
@Component({
  selector: 'page-mypage',
  templateUrl: 'mypage.html',
})
export class MypagePage {



  // 상단 세그먼트 툴바 클릭 시 아래 할당된 html 페이지 출력
  historyMain = HistoryMainPage;
  locationMain = LocationMainPage;
  reviewMain = ReviewMainPage;
  bucketlistMain = BucketlistMainPage;
  
  mypageTab: string="history";

  constructor(private serverProvider:ServerProvider, public navCtrl: NavController,
             public navParams: NavParams, private appCtrl:App, private alertController: AlertController,
             public menuCtrl:MenuController) {
    
    this.mypageTab = "history";

  }


  // closeMenu() {
  //   this.menuCtrl.close();
  // }
 
  // toggleMenu() {
  //   this.menuCtrl.toggle();
  // }
 

  
  // 마이페이지 데이터 불러오기 
  ionViewDidLoad() {
    console.log("mypage 열림")
  }


  /********************************************
   ***************  히스토리  ******************
   ********************************************/

  // 히스토리 게시글 작성 페이지로 이동 (히스토리 추가 버튼 클릭)
  goAddHistory() {
    // tabs 보이지 않도록 상위 이동
    this.appCtrl.getRootNav().push(AddHistoryPage);
  }
  goAddLocation() {
    // tabs 보이지 않도록 상위 이동
    this.appCtrl.getRootNav().push(AddLocationPage);
  }
  goAddReview() {
    // tabs 보이지 않도록 상위 이동
    this.appCtrl.getRootNav().push(AddReviewPage);
  }

  doLogout() {
    let body = ""
     let url = "/member/doLogout";
  
     this.serverProvider.post(url, body).then((res:any)=>{
       let response = JSON.parse(JSON.stringify(res));
       console.log("로그아웃 응답 성공: "+ response);
      
       this.navCtrl.setRoot(LoginPage);

       },(err)=>{
         let alert = this.alertController.create({
           title: "서버와 통신 문제 발생",
           buttons:['OK~!!']
         });
         console.log("post-에러 출력 합니다~~!!: "+JSON.stringify(err));
     });
  }
}
