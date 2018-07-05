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
    { age: "1살", year: "1996 년", imgCount: "(19)", title: "Type 1 Diabetes", barImgUrl: "https://blogfiles.pstatic.net/MjAxODA2MjdfMjIw/MDAxNTMwMTA3MTA5NzQ4.4m8ktRaSfbFJhPHlhyqISorb5zMGfdC8YEN9uYWMvPUg.mu2nxindo6gLP6Al2pllZrtCwKfgH6rjmx0SqE3X6Fkg.PNG.oyg11/image.png?type=w1", imgUrl: "http://ionicframework.com/img/docs/mcfly.jpg" },
    { age: "2살", year: "1997 년", imgCount: "(129)", title: "Multiple Sclerosis", barImgUrl: "https://blogfiles.pstatic.net/MjAxODA2MjdfMjcx/MDAxNTMwMTA3NDM4MDQ0.cd3vy6AMPb1SdCtviT0NciB4As7uAfFV0KxwTmM1VRQg.1qYPcbjiIHR3o1-eIAcyx2hrDj4f8zRRvigj8Wta61sg.PNG.oyg11/image.png?type=w1", imgUrl: "http://ionicframework.com/img/docs/mcfly.jpg" },
    { age: "3살", year: "1998 년", imgCount: "(1,305)", title: "Crohn's & Colitis", barImgUrl: "https://blogfiles.pstatic.net/MjAxODA2MjdfMjAz/MDAxNTMwMTA3MjM5NjM5.tZgjAcbCwIXcvGwNJyPNJUHgw9FfPo4Yr7zwy5Izog4g.yIOq-WRardDFSQB0FDmCNoU8nvs59Ud4ZdokzOkHq2kg.PNG.oyg11/image.png?type=w1", imgUrl: "http://ionicframework.com/img/docs/mcfly.jpg" },
    { age: "5살", year: "2000 년", imgCount: "(553)", title: "Lupus", barImgUrl: "https://blogfiles.pstatic.net/MjAxODA2MjdfMjA0/MDAxNTMwMTA3NjE5NzE5.lmjrolJrE4o4X-TwrDrbOIaPLm_gCIbJGwVjQZ_BYhcg.bYjHv-x2Xk5TDBumN6P7xr7QWouYOdg_rU2AMHJakAcg.PNG.oyg11/image.png?type=w1", imgUrl: "http://ionicframework.com/img/docs/mcfly.jpg" },
    { age: "9살", year: "2004 년", imgCount: "(232)", title: "Rheumatoid Arthritis", barImgUrl: "https://blogfiles.pstatic.net/MjAxODA2MjdfMjUx/MDAxNTMwMTA3NzA5ODUw.KYiOdz-35B_Wgk-LZ3x0NaYwK8pwcgzDW_BV_O5Wi74g.AspXMTu9Aw4zqUat0EvnLq-ZkCNqsFJCDBI805jHBJMg.PNG.oyg11/image.png?type=w1", imgUrl: "http://ionicframework.com/img/docs/mcfly.jpg" },
    { age: "10살", year: "2005 년", imgCount: "(15)", title: "Rheumatoid Arthritis", barImgUrl: "https://blogfiles.pstatic.net/MjAxODA2MjdfMjIw/MDAxNTMwMTA3MTA5NzQ4.4m8ktRaSfbFJhPHlhyqISorb5zMGfdC8YEN9uYWMvPUg.mu2nxindo6gLP6Al2pllZrtCwKfgH6rjmx0SqE3X6Fkg.PNG.oyg11/image.png?type=w1", imgUrl: "http://ionicframework.com/img/docs/mcfly.jpg" },
    { age: "11살", year: "2006 년", imgCount: "(352)", title: "Rheumatoid Arthritis", barImgUrl: "https://blogfiles.pstatic.net/MjAxODA2MjdfMjcx/MDAxNTMwMTA3NDM4MDQ0.cd3vy6AMPb1SdCtviT0NciB4As7uAfFV0KxwTmM1VRQg.1qYPcbjiIHR3o1-eIAcyx2hrDj4f8zRRvigj8Wta61sg.PNG.oyg11/image.png?type=w1",  imgUrl: "http://ionicframework.com/img/docs/mcfly.jpg" },
    { age: "12살", year: "2007 년", imgCount: "(1,032)", title: "Rheumatoid Arthritis", barImgUrl: "https://blogfiles.pstatic.net/MjAxODA2MjdfMjAz/MDAxNTMwMTA3MjM5NjM5.tZgjAcbCwIXcvGwNJyPNJUHgw9FfPo4Yr7zwy5Izog4g.yIOq-WRardDFSQB0FDmCNoU8nvs59Ud4ZdokzOkHq2kg.PNG.oyg11/image.png?type=w1", imgUrl: "http://ionicframework.com/img/docs/mcfly.jpg" },
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
