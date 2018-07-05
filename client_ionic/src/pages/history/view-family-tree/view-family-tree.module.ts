import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewFamilyTreePage } from './view-family-tree';

@NgModule({
  declarations: [
    ViewFamilyTreePage,
  ],
  imports: [
    IonicPageModule.forChild(ViewFamilyTreePage),
  ],
})
export class ViewFamilyTreePageModule {}
