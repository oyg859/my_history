import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListHistoryAgePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-history-age',
  templateUrl: 'list-history-age.html',
})
export class ListHistoryAgePage {

  diseases = [
    { age: "1살", year: "1996 년", imgCount: "(19)", title: "Type 1 Diabetes", barImgUrl: "https://postfiles.pstatic.net/MjAxODA2MjFfMjc2/MDAxNTI5NTUyODM0ODM1.yt9YeHeW8xFakojinuH3Bc1Tb_kDTgkZR7VxPk2QClQg.XLn1QrBgh8yAYeQwT3JwnVtTrPAavB9L00TOO-WKzKMg.PNG.oyg11/image.png?type=w773", imgUrl: "http://ionicframework.com/img/docs/mcfly.jpg" },
    { age: "2살", year: "1997 년", imgCount: "(129)", title: "Multiple Sclerosis", barImgUrl: "https://postfiles.pstatic.net/MjAxODA2MjFfMjI5/MDAxNTI5NTUyNzU0NzM0.KxQXy4xeUUtDuF8mQjtiXsMWlfjhJ3mvwMLnY6HNyDMg.SZe9N0ETt9GFUxJcFMK8fbomKd8ovv4iv_MTH1IH07Eg.PNG.oyg11/image.png?type=w773", imgUrl: "http://ionicframework.com/img/docs/mcfly.jpg" },
    { age: "3살", year: "1998 년", imgCount: "(1,305)", title: "Crohn's & Colitis", barImgUrl: "https://postfiles.pstatic.net/MjAxODA2MjFfMjI5/MDAxNTI5NTUyNzU0NzM0.KxQXy4xeUUtDuF8mQjtiXsMWlfjhJ3mvwMLnY6HNyDMg.SZe9N0ETt9GFUxJcFMK8fbomKd8ovv4iv_MTH1IH07Eg.PNG.oyg11/image.png?type=w773", imgUrl: "http://ionicframework.com/img/docs/mcfly.jpg" },
    { age: "5살", year: "2000 년", imgCount: "(553)", title: "Lupus", barImgUrl: "https://postfiles.pstatic.net/MjAxODA2MjFfMjI5/MDAxNTI5NTUyNzU0NzM0.KxQXy4xeUUtDuF8mQjtiXsMWlfjhJ3mvwMLnY6HNyDMg.SZe9N0ETt9GFUxJcFMK8fbomKd8ovv4iv_MTH1IH07Eg.PNG.oyg11/image.png?type=w773", imgUrl: "http://ionicframework.com/img/docs/mcfly.jpg" },
    { age: "9살", year: "2004 년", imgCount: "(232)", title: "Rheumatoid Arthritis", barImgUrl: "https://postfiles.pstatic.net/MjAxODA2MjFfMjI5/MDAxNTI5NTUyNzU0NzM0.KxQXy4xeUUtDuF8mQjtiXsMWlfjhJ3mvwMLnY6HNyDMg.SZe9N0ETt9GFUxJcFMK8fbomKd8ovv4iv_MTH1IH07Eg.PNG.oyg11/image.png?type=w773", imgUrl: "http://ionicframework.com/img/docs/mcfly.jpg" },
    { age: "10살", year: "2005 년", imgCount: "(15)", title: "Rheumatoid Arthritis", barImgUrl: "https://postfiles.pstatic.net/MjAxODA2MjFfMjI5/MDAxNTI5NTUyNzU0NzM0.KxQXy4xeUUtDuF8mQjtiXsMWlfjhJ3mvwMLnY6HNyDMg.SZe9N0ETt9GFUxJcFMK8fbomKd8ovv4iv_MTH1IH07Eg.PNG.oyg11/image.png?type=w773", imgUrl: "http://ionicframework.com/img/docs/mcfly.jpg" },
    { age: "11살", year: "2006 년", imgCount: "(352)", title: "Rheumatoid Arthritis", barImgUrl: "https://postfiles.pstatic.net/MjAxODA2MjFfMjI5/MDAxNTI5NTUyNzU0NzM0.KxQXy4xeUUtDuF8mQjtiXsMWlfjhJ3mvwMLnY6HNyDMg.SZe9N0ETt9GFUxJcFMK8fbomKd8ovv4iv_MTH1IH07Eg.PNG.oyg11/image.png?type=w773",  imgUrl: "http://ionicframework.com/img/docs/mcfly.jpg" },
    { age: "12살", year: "2007 년", imgCount: "(1,032)", title: "Rheumatoid Arthritis", barImgUrl: "https://postfiles.pstatic.net/MjAxODA2MjFfMjI5/MDAxNTI5NTUyNzU0NzM0.KxQXy4xeUUtDuF8mQjtiXsMWlfjhJ3mvwMLnY6HNyDMg.SZe9N0ETt9GFUxJcFMK8fbomKd8ovv4iv_MTH1IH07Eg.PNG.oyg11/image.png?type=w773", imgUrl: "http://ionicframework.com/img/docs/mcfly.jpg" },
    { age: "13살", year: "2008 년", imgCount: "(392)", title: "Rheumatoid Arthritis", barImgUrl: "https://postfiles.pstatic.net/MjAxODA2MjFfMjI5/MDAxNTI5NTUyNzU0NzM0.KxQXy4xeUUtDuF8mQjtiXsMWlfjhJ3mvwMLnY6HNyDMg.SZe9N0ETt9GFUxJcFMK8fbomKd8ovv4iv_MTH1IH07Eg.PNG.oyg11/image.png?type=w773", imgUrl: "http://ionicframework.com/img/docs/mcfly.jpg" },
    { age: "14살", year: "2009 년", imgCount: "(952)", title: "Rheumatoid Arthritis", barImgUrl: "https://postfiles.pstatic.net/MjAxODA2MjFfMjI5/MDAxNTI5NTUyNzU0NzM0.KxQXy4xeUUtDuF8mQjtiXsMWlfjhJ3mvwMLnY6HNyDMg.SZe9N0ETt9GFUxJcFMK8fbomKd8ovv4iv_MTH1IH07Eg.PNG.oyg11/image.png?type=w773", imgUrl: "http://ionicframework.com/img/docs/mcfly.jpg" },
    { age: "15살", year: "2010 년", imgCount: "(395)", title: "Rheumatoid Arthritis", barImgUrl: "https://postfiles.pstatic.net/MjAxODA2MjFfMjI5/MDAxNTI5NTUyNzU0NzM0.KxQXy4xeUUtDuF8mQjtiXsMWlfjhJ3mvwMLnY6HNyDMg.SZe9N0ETt9GFUxJcFMK8fbomKd8ovv4iv_MTH1IH07Eg.PNG.oyg11/image.png?type=w773", imgUrl: "http://ionicframework.com/img/docs/mcfly.jpg" },
    { age: "16살", year: "2011 년", imgCount: "(1,322)", title: "Rheumatoid Arthritis", barImgUrl: "https://postfiles.pstatic.net/MjAxODA2MjFfMjI5/MDAxNTI5NTUyNzU0NzM0.KxQXy4xeUUtDuF8mQjtiXsMWlfjhJ3mvwMLnY6HNyDMg.SZe9N0ETt9GFUxJcFMK8fbomKd8ovv4iv_MTH1IH07Eg.PNG.oyg11/image.png?type=w773", imgUrl: "http://ionicframework.com/img/docs/mcfly.jpg" },
    { age: "17살", year: "2012 년", imgCount: "(2,596)", title: "Rheumatoid Arthritis", barImgUrl: "https://postfiles.pstatic.net/MjAxODA2MjFfMjI5/MDAxNTI5NTUyNzU0NzM0.KxQXy4xeUUtDuF8mQjtiXsMWlfjhJ3mvwMLnY6HNyDMg.SZe9N0ETt9GFUxJcFMK8fbomKd8ovv4iv_MTH1IH07Eg.PNG.oyg11/image.png?type=w773", imgUrl: "http://ionicframework.com/img/docs/mcfly.jpg" },
    { age: "18살", year: "2013 년", imgCount: "(936)", title: "Rheumatoid Arthritis", barImgUrl: "https://postfiles.pstatic.net/MjAxODA2MjFfMjI5/MDAxNTI5NTUyNzU0NzM0.KxQXy4xeUUtDuF8mQjtiXsMWlfjhJ3mvwMLnY6HNyDMg.SZe9N0ETt9GFUxJcFMK8fbomKd8ovv4iv_MTH1IH07Eg.PNG.oyg11/image.png?type=w773", imgUrl: "http://ionicframework.com/img/docs/mcfly.jpg" },
    { age: "19살", year: "2014 년", imgCount: "(185)", title: "Rheumatoid Arthritis", barImgUrl: "https://postfiles.pstatic.net/MjAxODA2MjFfMjI5/MDAxNTI5NTUyNzU0NzM0.KxQXy4xeUUtDuF8mQjtiXsMWlfjhJ3mvwMLnY6HNyDMg.SZe9N0ETt9GFUxJcFMK8fbomKd8ovv4iv_MTH1IH07Eg.PNG.oyg11/image.png?type=w773", imgUrl: "http://ionicframework.com/img/docs/mcfly.jpg" },
    { age: "20살", year: "2015 년", imgCount: "(935)", title: "Rheumatoid Arthritis", barImgUrl: "https://postfiles.pstatic.net/MjAxODA2MjFfMjI5/MDAxNTI5NTUyNzU0NzM0.KxQXy4xeUUtDuF8mQjtiXsMWlfjhJ3mvwMLnY6HNyDMg.SZe9N0ETt9GFUxJcFMK8fbomKd8ovv4iv_MTH1IH07Eg.PNG.oyg11/image.png?type=w773", imgUrl: "http://ionicframework.com/img/docs/mcfly.jpg" },
    { age: "21살", year: "2016 년", imgCount: "(777)", title: "Rheumatoid Arthritis", barImgUrl: "https://postfiles.pstatic.net/MjAxODA2MjFfMjI5/MDAxNTI5NTUyNzU0NzM0.KxQXy4xeUUtDuF8mQjtiXsMWlfjhJ3mvwMLnY6HNyDMg.SZe9N0ETt9GFUxJcFMK8fbomKd8ovv4iv_MTH1IH07Eg.PNG.oyg11/image.png?type=w773", imgUrl: "http://ionicframework.com/img/docs/mcfly.jpg" },
    { age: "22살", year: "2017 년", imgCount: "(3,249)", title: "Rheumatoid Arthritis", barImgUrl: "https://postfiles.pstatic.net/MjAxODA2MjFfMjI5/MDAxNTI5NTUyNzU0NzM0.KxQXy4xeUUtDuF8mQjtiXsMWlfjhJ3mvwMLnY6HNyDMg.SZe9N0ETt9GFUxJcFMK8fbomKd8ovv4iv_MTH1IH07Eg.PNG.oyg11/image.png?type=w773", imgUrl: "http://ionicframework.com/img/docs/mcfly.jpg" }
  ];

  shownGroup = null;

toggleGroup(group) {
    if (this.isGroupShown(group)) {
        this.shownGroup = null;
    } else {
        this.shownGroup = group;
    }
};
isGroupShown(group) {
    return this.shownGroup === group;
};


  userName:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.userName = "홍길동";
    console.log('ionViewDidLoad ListHistoryAgePage');
  }

}
