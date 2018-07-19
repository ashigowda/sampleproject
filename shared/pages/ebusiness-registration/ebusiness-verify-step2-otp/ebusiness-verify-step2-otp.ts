import { ApiProvider } from 'mediserve-services';
import { Component } from '@angular/core';

import { NavController, IonicPage } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { BasePage } from '../../../../pages/base/BasePage';

@IonicPage()

@Component({
    selector: 'page-ebusiness-verify-step2-otp',
    templateUrl: 'ebusiness-verify-step2-otp.html'
})

export class ebusinessVerifyStep2Otp extends BasePage {
   
    aadhar = 'aadhar'
    otp: string;

    constructor(
          protected navCtrl: NavController,
        protected navParams: NavParams,
        protected svcsCtrl: ApiProvider
    ) {
        super(navCtrl, navParams, svcsCtrl);
        // this.title = "Verify Aadhar";
    }

    back() {
        this.navCtrl.push('ebusinessVerifyStep1Aadhar');
    }

    next() {
        this.navCtrl.push('ebusinessVerifyStep3Confirm')
    }

}
