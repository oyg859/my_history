import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, App } from 'ionic-angular';
import { AddCategoryPage } from '../../category/add-category/add-category';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AddRatingPage } from '../../common/add-rating/add-rating';


/**
 * Generated class for the AddReviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-review',
  templateUrl: 'add-review.html',
})
export class AddReviewPage {

  categoryBoardForm: FormGroup;

  // 게시글 제목, 게시글 본문
  boardTitle: string;
  boardContent: string;

  // 리뷰 항목
  reviewItem: string;

  selectCategories;

  categories = [{ categoryName: "추억의 장소" },
  { categoryName: "좋아하는 것" },
  { categoryName: "좋아하는 것" },
  { categoryName: "인생의 발자취" }
  ];

  // 히스토리 추가 "완료" 버튼 활성/비활성 체크
  isenabled: boolean = false;

  reviewItemPlaceHolder: string = "리뷰항목 입력"
  boardTitlePlaceHolder: string = "리뷰 제목 (입력 선택)"
  boardContentPlaceHolder: string = "어떻게 생각하시나요?"



  
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public modalCtrl: ModalController, private appCtrl: App) {
    this.categoryBoardForm = new FormGroup({
  
      boardTitileForm: new FormControl(''),
      boardContentForm: new FormControl('', [Validators.required])
    });
  };

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddReviewPage');
  }


  // 히스토리 게시글 "완료" 버튼 클릭 시
  viewAddCategory() {
    this.appCtrl.getRootNav().push(AddCategoryPage);

  }
  // 평가하기 버튼 클릭 (별점 평가 모달 팝업 add-rating 페이지 생성)
  viewRating() {
    const modal = this.modalCtrl.create(AddRatingPage);
    modal.present();
  }
  
}