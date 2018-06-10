import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IntroPageModule } from '../pages/intro/intro.module';
import { JoinPageModule } from '../pages/join/join.module';
import { LoginPageModule } from '../pages/login/login.module';
import { MypagePageModule } from '../pages/mypage/mypage.module';
import { MyErrorHandler } from '../classes/my-error-handler';
import { ServerProvider } from '../providers/server/server';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    IntroPageModule,
    MypagePageModule,
    JoinPageModule,
    LoginPageModule,
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: MyErrorHandler},
    ServerProvider
  ]
})
export class AppModule {}
