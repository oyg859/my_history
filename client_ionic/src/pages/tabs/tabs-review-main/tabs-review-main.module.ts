import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsReviewMainPage } from './tabs-review-main';

@NgModule({
  declarations: [
    TabsReviewMainPage,
  ],
  imports: [
    IonicPageModule.forChild(TabsReviewMainPage),
  ],
})
export class TabsReviewMainPageModule {}
