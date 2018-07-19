import { ApiProvider } from 'mediserve-services';
import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { BasePage } from '../../../../pages/base/BasePage';

@IonicPage()

@Component({
    selector: 'page-ebusiness-registration-step4',
    templateUrl: 'ebusiness-registration-step4.html'
})

export class ebusinessRegistrationStep4 extends BasePage {

    logo: string;

    constructor(
          protected navCtrl: NavController,
        protected navParams: NavParams,
        protected svcsCtrl: ApiProvider
    ) {
        super(navCtrl, navParams, svcsCtrl);
        this.logo = "medkit";
    }

    gotoVerifyBusinessPage() {
        this.gotoVerifyBusinessPage1();
    }


}
