import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { ImagesProvider } from '../providers/images/images';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { MypagePage} from '../pages/mypage/mypage';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IntroPageModule } from '../pages/intro/intro.module';
import { JoinPageModule } from '../pages/join/join.module';
import { LoginPageModule } from '../pages/login/login.module';
import { MypagePageModule } from '../pages/mypage/mypage.module';
import { MyErrorHandler } from '../classes/my-error-handler';
import { ServerProvider } from '../providers/server/server';
import { LoginPage } from '../pages/login/login';
import { AutoHideDirective} from '../directives/auto-hide/auto-hide';
import { AddHistoryPageModule } from '../pages/history/add-history/add-history.module';
import { AddLocationPageModule } from '../pages/location/add-location/add-location.module';
import { AddReviewPageModule } from '../pages/review/add-review/add-review.module';
import { AddCategoryPageModule } from '../pages/category/add-category/add-category.module';
import { Autosize } from '../directives/autosize/autosize';
import { AddReviewPage } from '../pages/review/add-review/add-review';
import { AddCategoryPage } from '../pages/category/add-category/add-category';
import { AddHistoryPage } from '../pages/history/add-history/add-history';
import { AddLocationPage } from '../pages/location/add-location/add-location';
import { AddRatingPage } from '../pages/common/add-rating/add-rating';
import { HistoryMainPage } from '../pages/history/history-main/history-main';
import { LocationMainPage } from '../pages/location/location-main/location-main';
import { ReviewMainPage } from '../pages/review/review-main/review-main';
import { ListHistoryAgePage } from '../pages/history/list-history-age/list-history-age';
import { TabsHomeMainPage } from '../pages/tabs/tabs-home-main/tabs-home-main';
import { TabsLocationMainPage } from '../pages/tabs/tabs-location-main/tabs-location-main';
import { TabsReviewMainPage } from '../pages/tabs/tabs-review-main/tabs-review-main';
import { BucketlistMainPage } from '../pages/bucketlist/bucketlist-main/bucketlist-main';
import { ViewFamilyTreePage } from '../pages/history/view-family-tree/view-family-tree';

import { RichTextComponent } from '../components/rich-text/rich-text';
// ckeditor 지원 코드
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MypagePage,
    AddHistoryPage,
    AddLocationPage,
    AddReviewPage,
    AddCategoryPage,
    AutoHideDirective,
    Autosize,
    AddRatingPage,
    HistoryMainPage,
    LocationMainPage,
    ReviewMainPage,
    BucketlistMainPage,
    ListHistoryAgePage,
    TabsHomeMainPage,
    TabsLocationMainPage,
    TabsReviewMainPage,
    ViewFamilyTreePage
  ],
  imports: [ 
    IntroPageModule,
    JoinPageModule,
    LoginPageModule,
    HttpClientModule,
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      menuType: 'push',
      platforms: {
        ios: {
          menuType: 'overlay',
        }
      }
    }
    //  , {},
    //    {
    //   // url 라우터 딥링크 설정 (서버에서 주소로 호출시 해당하는 html 로 이동. 현재 적용 안되는 코드)
    //   links: [
    //     { component: LoginPage, name: 'login', segment: 'login'  },
    //     { component: TabsPage, name: 'tabs', segment: 'tabs' }
    //   ]
    // }
  )
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MypagePage,
    AddHistoryPage,
    AddLocationPage,
    AddReviewPage,
    AddCategoryPage,
    AddRatingPage,
    HistoryMainPage,
    LocationMainPage,
    ReviewMainPage,
    BucketlistMainPage,
    ListHistoryAgePage,
    TabsHomeMainPage,
    TabsLocationMainPage,
    TabsReviewMainPage,
    ViewFamilyTreePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: MyErrorHandler},
    ServerProvider,
    ImagesProvider,
    Camera,
    FileTransfer
  ]
})
export class AppModule {}
