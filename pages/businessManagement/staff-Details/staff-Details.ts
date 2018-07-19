import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams, ModalController } from 'ionic-angular';
import { ApiProvider, ClinicUserService, ClinicUserResponse } from 'mediserve-services/lib';
import { Observable } from 'rxjs/Observable';
import { BasePage } from '../../base/BasePage';
import { Photoupload } from '../../../shared/components/photo-upload/photo-upload';

@IonicPage({
    segment: 'business/staff-details/:userId',
    defaultHistory: ['StaffList']
})

@Component({
    selector: 'page-staff-Details',
    templateUrl: 'staff-Details.html'
})

export class staffDetails extends BasePage {

    archive: any;
    user: Observable<ClinicUserResponse>;
    input: ClinicUserService.ReadParams;

    image: any;
    imgPreview: any = 'assets/imgs/blank-avatar.jpg';
    public photos: any;
    public base64Image: string;

    constructor(protected navCtrl: NavController,
        protected navParams: NavParams,
        protected svcsCtrl: ApiProvider,
        public modalCtrl: ModalController
    ) {
        super(navCtrl, navParams, svcsCtrl);
        this.title = "User Details";
        this.archive = this.navParams.get('archive')
    }

    ionViewWillEnter() {
        this.input = {
            clinicId: this.svcsCtrl.homeService.getItem("clinicId"),
            clinicUserId: this.svcsCtrl.homeService.getItem('userId')
        }
       this.user = this.svcsCtrl.clinicUserService.read(this.input)
    }

    edit() {
        this.navCtrl.push('staffEdit')
    }

    changePhotoModal() {
        let photoUploadModal = this.modalCtrl.create(Photoupload, {
          type: "Profile",
        //   referenceId: this.user.user.firstName + " " + this.user.user.lastName,
          caller: "Profile Picture",
          imageId: "????"
        });
        photoUploadModal.present();

        photoUploadModal.onDidDismiss(data => { //This is a listener which wil get the data passed from modal when the modal's view controller is dismissed
          console.log("Data =>", data) //This will log the form entered by user in add modal.
        })
      }

    ionViewWillLeave() {
        let tabs = document.querySelectorAll('.tabbar');
        if (tabs !== null) {
            Object.keys(tabs).map( key => {
                tabs[key].style.transform = 'translateY(0)';
            });
        }
    }

    gotoUserManagementPage() {
        this.navCtrl.push('userList')
    }

}