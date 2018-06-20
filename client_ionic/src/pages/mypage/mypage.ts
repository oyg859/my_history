import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ServerProvider } from '../../providers/server/server';
import { AutoHideDirective} from '../../directives/auto-hide/auto-hide';
import { AddHistoryPage } from '../history/add-history/add-history';
import { AddLocationPage } from '../location/add-location/add-location';
import { AddReviewPage } from '../review/add-review/add-review';
import { AddCategoryPage } from '../category/add-category/add-category';
import { Detail1Page } from '../detail1/detail1';
import { Detail2Page } from '../detail2/detail2';

@IonicPage()
@Component({
  selector: 'page-mypage',
  templateUrl: 'mypage.html',
})
export class MypagePage {

  detail1 = Detail1Page;
  detail2 = Detail2Page;

  /** mypage/history 페이지
   *
   */
  awsS3:string = "https://s3.ap-northeast-2.amazonaws.com/takitkorea"
  
  // 프로필 정보 (임시 하드코딩)
  birthDay:string = "1985년 3월, 뉴욕";
  address: string = "서울 화곡동";
  like: string = "컴퓨터 게임";
  job: string = "건축가";

  friendsNumber: string = "57 ";

  hashTag: string = "#행복  #세월  #히스토리";

  categories = [{categoryName: "추억의 장소"},
                {categoryName: "좋아하는 것"},
                {categoryName: "여행기"},
                {categoryName: "인생의 발자취"}
              ];
  contents = [
              {userName: "강호동", location: "화곡동", title: "가마솥 축제", imagePath: "데리치킨도시락"},
              {userName: "홍길동", location: "신사동", title: "대추나무 앞에서", imagePath: "포테이토마요"},
              {userName: "이미자", location: "일본 교토", title: "장어 맛집",  imagePath: "매콤포테이토"},
              {userName: "패티김", location: "중국 상하이", title: "백년 나무 숲",  imagePath: "대왕매콤참치마요"},
              {userName: "김철수", location: "제주도 서귀포", title: "맥주 마시는 날",  imagePath: "제육덮밥"}
              ];

  // 서버에서 읽어온 파라미터 저장 변수
  userName:string;
  userEmail:string;

  mypageTab: string="history";

  constructor(private serverProvider:ServerProvider, public navCtrl: NavController,
             public navParams: NavParams, private appCtrl:App, private alertController: AlertController) {
    
    this.mypageTab = "history";
    
  }
  
  // 마이페이지 데이터 불러오기 
  ionViewDidLoad() {

    let body =  "userEmail" + this.userEmail;
   // let url = "/mypage/viewMypageHistory";
    let url = "/mypage/viewMypageHistory";

    console.log('ionViewDidLoad MypagePage');

    this.serverProvider.post(url, body).then((res:any)=>{
      let response = JSON.parse(JSON.stringify(res));
      console.log("응답 결과: "+ response.userName);

      if(response.userName.length > 0){
        this.userName = response.userName;
      }else{
        let alert = this.alertController.create({
          title: '서버에서 데이터를 읽어오지 못했습니다.',
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

    /********************************************
   ***************  카테고리 (공통)  ******************
   ********************************************/
  
  // 카테고리 추가 버튼 클릭시
   viewAddCategory(){
    this.appCtrl.getRootNav().push(AddCategoryPage);
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
