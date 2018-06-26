import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { MypagePage } from '../mypage/mypage';
import { TabsHomeMainPage } from './tabs-home-main/tabs-home-main';
import { TabsLocationMainPage } from './tabs-location-main/tabs-location-main';
import { TabsReviewMainPage } from './tabs-review-main/tabs-review-main';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = TabsHomeMainPage;
  tab2Root = TabsLocationMainPage;
  tab3Root = TabsReviewMainPage;
  tab4Root = MypagePage;

  constructor() {

  }
}
