import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platform, AlertController } from 'ionic-angular';

import 'rxjs/add/operator/map';

/*
  Generated class for the ServerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServerProvider {
   serverAddr: string = "http://ec2-13-209-77-58.ap-northeast-2.compute.amazonaws.com:3000";
  constructor(public http: HttpClient, private platform: Platform, private alertController: AlertController) {
    console.log('Hello ServerProvider Provider');
  }
  get(url) {
    return new Promise((resolve, reject) => {
      console.log("url:" + url);
      let serverUrl;
      if (this.platform.is('cordova'))
        serverUrl = this.serverAddr + url;  // android, ios
     
      else
        serverUrl = "http://localhost:8100" + url; // ionic serve
        console.log("혹시 여기??");
      this.http.get(serverUrl).subscribe((res: any) => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }

  post(url, body) {
    return new Promise((resolve, reject) => {
      let serverUrl;

      if (this.platform.is('cordova')) {
        serverUrl = this.serverAddr + url; // android, ios

    }else{
        serverUrl = "http://localhost:8100" + url; // ionic serve
      // let headers = new HttpHeaders(
      //   { 'Content-Type': 'application/json' });
      console.log("여기는 웹 포스트!");
    }
      let headers = new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'});
      this.http.post(serverUrl, body, { headers: headers }).subscribe((res: any) => {
     
        console.log("무슨 에러입니까~~~~~~~~!!"+serverUrl);
        resolve(res);
      }, (err) => {
        reject(err);

      });
    
    });
  }


  delete(url) {
    return new Promise((resolve, reject) => {
      console.log("url:" + url);
      let serverUrl;
      if (this.platform.is('cordova'))
        serverUrl = this.serverAddr + url;  // android, ios
      else
        serverUrl = "http://localhost:8100" + url; // ionic serve
      this.http.delete(serverUrl).subscribe((res: any) => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }
}
