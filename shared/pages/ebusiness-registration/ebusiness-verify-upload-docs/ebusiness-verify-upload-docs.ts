import { ApiProvider } from 'mediserve-services';
import { Component } from '@angular/core';
import { NavController, IonicPage, ModalController } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { BasePage } from '../../../../pages/base/BasePage';


@IonicPage()

@Component({
    selector: 'page-ebusiness-verify-upload-docs',
    templateUrl: 'ebusiness-verify-upload-docs.html'
})

export class ebusinessVerifyUploadDocs extends BasePage {
    file_name: any;
    document: string;
    drug: string;
    id: string;
    address1: string;

    constructor(
          protected navCtrl: NavController,
        protected navParams: NavParams,
        protected svcsCtrl: ApiProvider,
        public modalCtrl: ModalController
    ) {
        super(navCtrl, navParams, svcsCtrl);
        // this.title = "Upload Document";
        this.file_name = this.navParams.get('file')
    }

    gotoHomePage() {
        this.navCtrl.push('ebusinessVerify')
    }

    uploadFile() {
        let profileModal = this.modalCtrl.create('ebusinessVerifySelectFile');
        profileModal.present();
    }
}