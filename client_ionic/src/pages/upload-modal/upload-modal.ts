import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ImagesProvider } from '../../providers/images/images';


@IonicPage()
@Component({
  selector: 'page-upload-modal',
  templateUrl: 'upload-modal.html',
})
export class UploadModalPage {
  imageData: any;
  desc: string;

  constructor(public navCtrl: NavController, 
              private imageProvider: ImagesProvider, private viewCtrl: ViewController, public navParams: NavParams) {
                this.imageData = this.navParams.get('data');
  }

  saveImage(){
    this.imageProvider.uploadImage(this.imageData, this.desc).then(res => {
      this.viewCtrl.dismiss({reload: true});
    }, err =>{
      this.viewCtrl.dismiss();
    });
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }

}
