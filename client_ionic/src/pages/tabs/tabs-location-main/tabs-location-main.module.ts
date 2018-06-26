import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsLocationMainPage } from './tabs-location-main';

@NgModule({
  declarations: [
    TabsLocationMainPage,
  ],
  imports: [
    IonicPageModule.forChild(TabsLocationMainPage),
  ],
})
export class TabsLocationMainPageModule {}
