import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HistoryMainPage } from './history-main';

@NgModule({
  declarations: [
    HistoryMainPage,
  ],
  imports: [
    IonicPageModule.forChild(HistoryMainPage),
  ],
})
export class HistoryMainPageModule {}
