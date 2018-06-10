import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';

import 'rxjs/add/operator/map';

/*
  Generated class for the ServerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServerProvider {
  serverAddr: string = "http://127.0.0.1:3000/";

  constructor(public http: HttpClient, private platform: Platform) {
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

      if (this.platform.is('cordova'))
        serverUrl = this.serverAddr + url; // android, ios
      else
        serverUrl = "http://localhost:8100" + url; // ionic serve
      // let headers = new HttpHeaders(
      //   { 'Content-Type': 'application/json' });

      let headers = new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'});
      console.log("무슨 에러입니까~~~~~~~~!!");
      this.http.post(serverUrl, body, { headers: headers }).subscribe((res: any) => {
        console.log("무슨 에러입니까~~~~~~~~!!");
        console.log("무슨 에러입니까~~~~~~~~!!"+serverUrl);
        resolve(res);
      }, (err) => {
        reject(err);

      });
    });
  }
}
