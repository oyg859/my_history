import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsHomeMainPage } from './tabs-home-main';

@NgModule({
  declarations: [
    TabsHomeMainPage,
  ],
  imports: [
    IonicPageModule.forChild(TabsHomeMainPage),
  ],
})
export class TabsHomeMainPageModule {}
