import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BucketlistMainPage } from './bucketlist-main';

@NgModule({
  declarations: [
    BucketlistMainPage,
  ],
  imports: [
    IonicPageModule.forChild(BucketlistMainPage),
  ],
})
export class BucketlistMainPageModule {}
