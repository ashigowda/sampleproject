import { Component, Input } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
//import { DomSanitizer } from '@angular/platform-browser';
import { ClinicUserResponse } from 'mediserve-services';
import { Photoupload } from '../photo-upload/photo-upload';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'profile-details',
  templateUrl: 'profile-details.html'
})

export class ProfileDetails {

  @Input('profile') profile: Observable<ClinicUserResponse>;
  @Input('center') center: any;

  image: any;
  imgPreview: any = 'assets/imgs/blank-avatar.jpg';
  public photos: any;
  public base64Image: string;

  constructor(protected navCtrl: NavController,
    public modalCtrl: ModalController
    //private sanitizer: DomSanitizer
  ) {

  }


  changePhotoModal() {
    let photoUploadModal = this.modalCtrl.create(Photoupload, {
      type: "Profile",
      // referenceId: this.profile.firstName + " " + this.profile.lastName,
      caller: "Profile Picture",
      imageId: "????"
    });
    photoUploadModal.present();

    photoUploadModal.onDidDismiss(data => { //This is a listener which wil get the data passed from modal when the modal's view controller is dismissed
      console.log("Data =>", data) //This will log the form entered by user in add modal.
    })
  }

}