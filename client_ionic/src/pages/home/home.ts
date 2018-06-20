import { Component } from '@angular/core';
import { NavController, Segment } from 'ionic-angular';
import { Detail1Page } from '../detail1/detail1';
import { Detail2Page } from '../detail2/detail2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
rootPage:any;

  constructor(public navCtrl: NavController) {

  }

  selected(seg: Segment) {
    let segval = seg.value;
    if (segval === 'detail1') {
    //this.navCtrl.setRoot(HomePage);
    this.rootPage = Detail1Page;
    } else if (segval === 'detail2') {
    this.rootPage = Detail2Page;
    //this.navCtrl.setRoot(CategoriesPage);
    }

  }

  detail1 = Detail1Page;
  detail2 = Detail2Page;


}
