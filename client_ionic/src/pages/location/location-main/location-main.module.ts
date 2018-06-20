import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocationMainPage } from './location-main';

@NgModule({
  declarations: [
    LocationMainPage,
  ],
  imports: [
    IonicPageModule.forChild(LocationMainPage),
  ],
})
export class LocationMainPageModule {}
