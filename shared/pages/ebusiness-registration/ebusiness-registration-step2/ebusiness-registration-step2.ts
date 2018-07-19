import { ApiProvider, ClinicTemplate } from 'mediserve-services';
import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { BasePage } from '../../../../pages/base/BasePage';

@IonicPage()
@Component({
    selector: 'page-ebusiness-registration-step2',
    templateUrl: 'ebusiness-registration-step2.html'
})
export class ebusinessRegistrationStep2 extends BasePage {
    business: ClinicTemplate;
    constructor(
          protected navCtrl: NavController,
        protected navParams: NavParams,
        protected svcsCtrl: ApiProvider
    ) {
        super(navCtrl, navParams, svcsCtrl);
        this.title = "Business Address";
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
        console.log("getting business");
        let business = this.svcsCtrl.clinicBusinessService.getItem('business')
        console.log("clinic" + JSON.stringify(business))
        if (business != null) {
            this.business = business;
        }
    }


    next() {
        this.business = this.business;
        this.svcsCtrl.clinicBusinessService.setItem('business', this.business)
            this.gotoRegistrationStep3();

    }
}
