import { ApiProvider, ClinicTemplate, } from 'mediserve-services';
import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { BasePage } from '../../../../pages/base/BasePage';

@IonicPage()

@Component({
    selector: 'page-ebusiness-registration-step3',
    templateUrl: 'ebusiness-registration-step3.html'
})

export class ebusinessRegistrationStep3 extends BasePage {

    logo: string;
    all: boolean;
    privacy: boolean;
    site: boolean;
    business: ClinicTemplate;
    constructor(
          protected navCtrl: NavController,
        protected navParams: NavParams,
        protected svcsCtrl: ApiProvider
    ) {
        super(navCtrl, navParams, svcsCtrl)
        this.title = "Business Registration";
        this.logo = "medkit"

        // this.business = new Clinic();
    }

    ionViewWillEnter() {
        this.getBusiness();
    }
    getBusiness() {
        let business = this.svcsCtrl.clinicBusinessService.getItem('business')
        console.log("clinic" + JSON.stringify(business))
        if (business != null) {
            this.business = business;
        }
    }

    agree() {
        this.registerClinic();

    }
    registerClinic() {
        this.svcsCtrl.clinicBusinessService.register(this.business)
            .subscribe((response) => {
                console.log('in register clinic' + JSON.stringify(response))
                this.business = response;
                this.svcsCtrl.homeService.setItem('clinicId',response._id)
                this.gotoRegisteredHome();
            },
            ((error) => {
                this.response = error.message
            }))

    }

}
