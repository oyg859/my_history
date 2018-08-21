import { Component, NgZone } from '@angular/core';
import { ImagesProvider } from '../../../providers/images/images';
import { IonicPage, NavController, ModalController, NavParams, App, Platform,
        ActionSheetController } from 'ionic-angular';
import { AddCategoryPage } from '../../category/add-category/add-category';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Camera, CameraOptions  } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject  } from '@ionic-native/file-transfer';

import { PreviewModalPage } from '../../preview-modal/preview-modal';
import { UploadModalPage } from '../../upload-modal/upload-modal';


var page;

@IonicPage()
@Component({
  selector: 'page-add-history',
  templateUrl: 'add-history.html',
})
export class AddHistoryPage {
  
  images:any = [];

  // 모바일에서 얻은 이미지 출력변수

  previewImage:string;

  imageFromMobile:any;
  imageAreaHtml:any;

  imageURI;  // 이미지 경로



  fileTransfer: FileTransferObject; // 전송할 파일 오브젝트

  public workoutProgress: string = '0' +'%';
  serverURI="http://http://XXX.XXXX.XXX:8080/ocrFileSubmit8080/ocrFileSubmit";
  
  historyBoardForm: FormGroup;

  // 게시글 제목, 게시글 본문
  boardTitle: string;
  boardContent: string;

  selectCategories;

  categories = [{categoryName: "추억의 장소"},
  {categoryName: "좋아하는 것"},
  {categoryName: "좋아하는 것"},
  {categoryName: "인생의 발자취"}
];

  // 히스토리 추가 "완료" 버튼 활성/비활성 체크
   isenabled:boolean = false;

  boardTitlePlaceHolder:string = "히스토리 제목 (입력 선택)"
  boardContentPlaceHolder:string = "어떠한 일이 있었나요?"

  ima1:any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private appCtrl:App, private platForm: Platform, private camera: Camera,
    private transfer : FileTransfer, private ngZone: NgZone,
    private actionSheetCtrl: ActionSheetController,
    private imagesProvider: ImagesProvider, private modalCtrl: ModalController) {
      this.historyBoardForm = new FormGroup({
        boardTitileForm: new FormControl(''),
        boardContentForm: new FormControl('', [Validators.required])
      });

      this.reloadImages();

      // page= this;
      // this.platForm.ready().then(()=>{
      //   this.fileTransfer= this.transfer.create();
      // });

      this.ima1 = "file:///storage/emulated/0/Android/data/io.ionic.starter/cache/IMG_0774.jpg?1531396730920";
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddHistoryPage');
  }

  




  // 이미지 제어 관련 함수
  openImage(img){
    let modal = this.modalCtrl.create('PreviewModalPage', { img: img } );
    modal.present();
  }

  reloadImages(){
    // this.imagesProvider.getImages().subscribe(data => {
    //   console.log("제발이미지");
     this.imagesProvider.getImages().then(data => {
       this.images = data;
     });
  }
  deleteImage(img){
    this.imagesProvider.deleteImage(img).subscribe(data => {
      this.reloadImages;
    });
  }

  presentActionSheet(){
    let actionSheet = this.actionSheetCtrl.create({
      title: '이미지 소스를 고르세요',
      buttons: [
        {
          text: '라이브러리로부터 로드',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: '카메라를 사용',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.CAMERA);
          }
        },
        {
          text: '취소',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }

  getProfileImageStyle() {
    console.log("얻어온 이미지는 ?: "+ this.imageFromMobile);
    return 'url(' + "http://4.bp.blogspot.com/-HMGbzfoH0y0/Vm59pnG0j4I/AAAAAAAAAE0/ds2HClG_ejU/s1600/%25EC%25B0%25A9%25EC%259A%25A9%25EC%2583%25B7.jpg" + ')'
  }

  img1:any;

  fileChange(event){
    if(event.target.files && event.target.files[0]){
      let reader = new FileReader();

      reader.onload = (event:any) => {
        this.img1 = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
      let fileList: FileList = event.target.files;  
      let file: File = fileList[0];
      console.log(file);
  }

  // 프리뷰 이미지 컨트롤
  imageControl(){
    console.log("이미지 컨트롤 실행");
  //  this.previewImage = undefined;
    this.previewImage = "";
  }

  // 이미지 불러오기
  takePicture(sourceType){
    var options = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true
    }

    this.camera.getPicture(options).then((imagePath) => {
    
      this.previewImage = imagePath;
      let imgAreaTag = '<img src={{previewImage}} id="preview" (click)="imageControl()"  />'
      document.getElementById('textareaAfterAddImage').outerHTML = imgAreaTag;
      
      // document.getElementById('preview').innerHTML = '<ion-textarea *ngIf="previewImage" class="boardTitleText" autosize rows="1" formControlName="boardTitileForm" type="text" [placeholder]="boardTitlePlaceHolder" [(ngModel)]="boardTitle"></ion-textarea>';
      //this.previewImage = 'data:image/jpeg;base64,' + imagePath;
      console.log("이미지 프리뷰 데이터: >>>>>>>>>"+ this.previewImage);
      //this.imageFromMobile = imagePath;
      // this.imageFromMobile = "http://4.bp.blogspot.com/-HMGbzfoH0y0/Vm59pnG0j4I/AAAAAAAAAE0/ds2HClG_ejU/s1600/%25EC%25B0%25A9%25EC%259A%25A9%25EC%2583%25B7.jpg";
      // console.log("이미지 선택 결과 데이터: >>>>>>>>>"+ this.imageFromMobile);
      // this.imageAreaHtml = '<img src={{imageFromMobile}} style="width: 100%;">이미지 출력좀<br><ion-textarea autosize rows="1" type="text" ></ion-textarea>';
      
      // document.body.style.backgroundImage = "url(this.imageFromMobile)";
      
      ///// 유튜브 업로드 예시 코드
      // let modal = this.modalCtrl.create('UploadModalPage', { data: imagePath });
      
      // modal.present();
      // modal.onDidDismiss(data => {
      //   if (data && data.reload) {
      //     this.reloadImages();
      //   }
      // });
    }, err => {
      console.log('Error: ', err);
    });
  }
//////////////////////////////

   // 카테고리 작성 페이지로 이동 (카테고리 추가 버튼 클릭)
  viewAddCategory(){
    this.appCtrl.getRootNav().push(AddCategoryPage);
  }

  // 히스토리 게시글 "완료" 버튼 클릭 시
  addHistory() {
          this.appCtrl.getRootNav().push(AddCategoryPage); 
  }

  // 파일 업로드 
  fileUpload(imageURI){
    return new Promise((resolve, reject) => {
      if(imageURI !== undefined) {
        let options : FileUploadOptions = {
          fileKey: 'file',
          fileName: 'name.jpg',
          mimeType: 'image/jpg',
          params: {
            desciption: 'file upload text'
          }
        };
        // 책 원본: 파라미터에 this.onProgress 로 나와있었으나 에러발생
        this.fileTransfer.onProgress(onprogress);
        console.log("call fileTransfer.upload "+imageURI);

        this.fileTransfer.upload(imageURI, this.serverURI, options, false)
        .then((response: any) => {
          console.log("upload: "+JSON.stringify(response));
          let result = JSON.parse(response.response);
          console.log("result.result: "+ result.result);
          this.ngZone.run(()=>{
            // console.lopg("progress 100%");
            // this.workoutProgress = '100%';
          });
          resolve();
        
        }, (err)=>{
          reject(err);
        });
      }
    });
  }


  // 저장된 이미지/ 촬영이미지/ 동영상 업로드 
  viewAddImage(){
  
    const options: CameraOptions = {
      quality: 100,
      targetWidth: 500,
      targetHeight: 500,
      allowEdit: true,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
      // quality: 70,
      // destinationType: this.camera.DestinationType.DATA_URL,
      // sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      // saveToPhotoAlbum: false
    };
    this.camera.getPicture(options).then((imageURI) => {
      console.log("imageURI: "+JSON.stringify(imageURI));
      this.imageURI= imageURI;
      if(imageURI !== undefined) {
        this.fileUpload(imageURI).then(()=>{
         console.log("파일전송완료후 액션 설정 여기에"); 
        },(err)=>{

        });
      }
    }, (err) => {
      console.log("err: "+JSON.stringify(err));
    });
  }

  viewAddLocation(){
    console.log("카메라 사진 가져오기 실행");
 
    const cameraOptions: CameraOptions = {
      quality: 100,
      targetWidth: 500,
      targetHeight: 500,
      saveToPhotoAlbum: true ,
      allowEdit: true,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.CAMERA,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE

      // quality: 70,
      // destinationType: this.camera.DestinationType.DATA_URL,
      // encodingType: this.camera.EncodingType.JPEG,
      // mediaType: this.camera.MediaType.PICTURE
      }
    this.camera.getPicture(cameraOptions).then((imageURI) => {
      console.log("imageURI: "+ imageURI);
      this.imageURI= imageURI;
      this.fileUpload(imageURI).then(()=>{
      },(err)=>{

      });

    }, (err) => {
    console.log("err: "+JSON.stringify(err));
  });
  }
}
``