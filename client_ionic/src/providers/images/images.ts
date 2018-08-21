//import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Camera, CameraOptions  } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject  } from '@ionic-native/file-transfer';
import { ServerProvider } from '../../providers/server/server';
import 'rxjs/add/operator/map';

@Injectable()
export class ImagesProvider {
  apiUrl = 'http://ec2-13-209-77-58.ap-northeast-2.compute.amazonaws.com:3000';
  //apiUrl = 'http://localhost:3000';


  constructor(private serverProvider: ServerProvider, 
    public http: Http, private transfer: FileTransfer) {
    console.log('Hello ImagesProvider Provider');
  }

  // 이미지 가져오기
  getImages() {
    let url = "/images";
    console.log("제발이미지와라!");
    //return this.http.get(this.apiUrl + 'images').map(res => res.json());
    return this.serverProvider.get(url).then((res:any) =>{
      
      res.json();
    });
  }

  deleteImage(img){
    let url = "/images/:id";
    // return this.http.delete(this.apiUrl + 'images/' + img._id);
    return this.http.delete(url + '/' + img._id);
  }

  // 이미지 업로드 
  uploadImage(img, desc) {
    let url = this.apiUrl + '/images';

    var options: FileUploadOptions = {
      fileKey: 'image',
      chunkedMode: false,
      mimeType: 'multipart/form-data',
      //mimeType: 'image/jpeg',
      params: { 'desc' : desc }
      
    }

    console.log("이미지 업로드 메서드 실행!!!!!!!!!");
    console.log("이미지 데이터: "+img);
    const fileTransfer = this.transfer.create();
    

    return fileTransfer.upload(img, url, options);
  }
}
