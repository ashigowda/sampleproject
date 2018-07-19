import { ApiProvider } from 'mediserve-services';
import { Component } from '@angular/core';

import { NavController, IonicPage } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { BasePage } from '../../../../pages/base/BasePage';

@IonicPage()

@Component({
    selector: 'page-ebusiness-verify-step3-confirm',
    templateUrl: 'ebusiness-verify-step3-confirm.html'
})
export class ebusinessVerifyStep3Confirm extends BasePage {
 
    constructor(
          protected navCtrl: NavController,
        protected navParams: NavParams,
        protected svcsCtrl: ApiProvider
    ) {
        super(navCtrl, navParams, svcsCtrl);
        //   this.title = "Confirmation"
    }

    gotoVerifyBusinessPage() {
       this.navCtrl.push('ebusinessVerify')
    }

   
}
