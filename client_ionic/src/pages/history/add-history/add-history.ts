import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { AddCategoryPage } from '../../category/add-category/add-category';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

/**
 * Generated class for the AddHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-history',
  templateUrl: 'add-history.html',
})
export class AddHistoryPage {
  
  historyBoardForm: FormGroup;

  // 게시글 제목, 게시글 본문
  boardTitle: string;
  boardContent: string;

  selectCategories;

  categories = [{categoryName: "추억의 장소"},
  {categoryName: "좋아하는 것"},
  {categoryName: "좋아하는 것"},
  {categoryName: "인생의 발자취"}
];

  // 히스토리 추가 "완료" 버튼 활성/비활성 체크
   isenabled:boolean = false;

  boardTitlePlaceHolder:string = "히스토리 제목 (입력 선택)"
  boardContentPlaceHolder:string = "어떠한 일이 있었나요?"

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private appCtrl:App) {
      this.historyBoardForm = new FormGroup({
        boardTitileForm: new FormControl(''),
        boardContentForm: new FormControl('', [Validators.required])
      });
    };
  
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddHistoryPage');
  }

   // 카테고리 작성 페이지로 이동 (카테고리 추가 버튼 클릭)
  viewAddCategory(){
    this.appCtrl.getRootNav().push(AddCategoryPage);
  }

  // 히스토리 게시글 "완료" 버튼 클릭 시
  addHistory() {
          this.appCtrl.getRootNav().push(AddCategoryPage);
     
    
  }

  
}
``