import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';

/**
 * Generated class for the AddCategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-category',
  templateUrl: 'add-category.html',
})
export class AddCategoryPage {
  categoryform: FormGroup;
  
  // 카테고리 이름, 카테고리명, 카테고리 헤더 이미지 파일이름
  categoryData = { categoryName: "", categoryDetail: "", categoryImageFileName: "" };

  


  categoryNamePlaceHolder:string = "카테고리 이름을 입력하세요";
  categoryDetailPlaceHolder:string = "어떤 카테고리인지 설명을 입력해보세요";

  
   constructor(public navCtrl: NavController) {
  
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddCategoryPage');
  }


  ngOnInit() {

    this.categoryform = new FormGroup({
      categoryName: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(30)]),
      categoryDetail: new FormControl('', [Validators.minLength(1), Validators.maxLength(300)]),
    });
  }

  addCategory(){

  }


}
