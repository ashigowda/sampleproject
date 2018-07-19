import { Component, Input } from '@angular/core';
import { NavController, ActionSheetController, Platform, NavParams, ViewController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
//import { DomSanitizer } from '@angular/platform-browser';
// import { Profile } from 'mediserve-services';

@Component({
  selector: 'photo-upload',
  templateUrl: 'photo-upload.html'
}) 
export class Photoupload {

  @Input('type') type: string;
  @Input('referenceId') referenceId: string;
  @Input('imageId') imageId: string;
  @Input('caller') caller: string;


  image: any; 
  imgPreview:any = 'assets/imgs/blank-avatar.jpg';
  public photos: any;
  public base64Image: string;

  constructor(  protected navCtrl: NavController,
    private actionsheetCtrl: ActionSheetController, 
    private platform: Platform,
    private camera: Camera,
    private params: NavParams,
    private viewCtrl: ViewController
    //private sanitizer: DomSanitizer
  ) {

  }

  ionViewWillEnter() {
    this.type = this.params.get('type');
    this.referenceId = this.params.get('referenceId');
    this.imageId = this.params.get('imageId');
    this.caller = this.params.get('caller');
    
  }

  changePicture() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Option',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Camera',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'ios-camera-outline' : null,
          handler: () => {
            this.selectImage(false);
          }
        },
        {
          text: 'Galary',
          icon: !this.platform.is('ios') ? 'ios-images-outline' : null,
          handler: () => {
            this.selectImage(true);
          }
        },
      ]
    });
    actionSheet.present();
  }


  async selectImage(useAlbum: boolean) {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true, 
      ...useAlbum ? { sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM } : {}
    }

    const imageData = await this.camera.getPicture(options);

    this.base64Image = `data:image/jpeg;base64,${imageData}`;
    //this.imgPreview = this.sanitizer.bypassSecurityTrustUrl("data:image/jpeg;base64," + imageData);
    this.imgPreview = "data:image/jpeg;base64," + imageData;
    this.photos.unshift(this.base64Image);

  }

  saveChange() {

  }

  dismiss() {
    this.viewCtrl.dismiss({
      base64Image: this.base64Image
    });
  }

}