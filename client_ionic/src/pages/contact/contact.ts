import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage  {
  signupform: FormGroup;
  userData = { "username": "", "password": "", "email": "", "name": "" };

  viewMode:string="second";

  constructor(public navCtrl: NavController) {
    this.viewMode = "second"
  }
 
  ngOnInit() {
    let EMAILPATTERN = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    this.signupform = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(4), Validators.maxLength(10)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]),
      name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(4), Validators.maxLength(30)]),
      email: new FormControl('', [Validators.required, Validators.pattern(EMAILPATTERN)]),
    });


  }
}
