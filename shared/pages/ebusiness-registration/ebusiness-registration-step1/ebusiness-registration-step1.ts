import { Component } from '@angular/core';

import { NavController, IonicPage } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { ApiProvider, ClinicTemplate } from "mediserve-services";
import { BasePage } from '../../../../pages/base/BasePage';

@IonicPage()
@Component({
    selector: 'page-ebusiness-registration-step1',
    templateUrl: 'ebusiness-registration-step1.html'
})
export class ebusinessRegistrationStep1 extends BasePage {

    business: ClinicTemplate;
    constructor(
        protected navCtrl: NavController,
        protected navParams: NavParams,
        protected svcsCtrl: ApiProvider
    ) {
        super(navCtrl, navParams, svcsCtrl);
        this.title = "Business Registration";
        this.business = {
            phone: '',
            name: '',
            tradingName: '',
            businessType: '',
            licenseNo: '',
            description: '',
            registeredName: '',
            email: '',
            address: {
                addressName: '',
                primary: false,
                address: '',
                area: '',
                city: '',
                state: '',
                country: '',
                pincode: ''
            },
            location: {
                lon: 0,
                lat: 0
            },

        }
    }

    ionViewWillEnter() {
    }

    next() {
        this.svcsCtrl.clinicBusinessService.setItem('business', this.business)
        this.gotoRegistrationStep2();

    }
}
