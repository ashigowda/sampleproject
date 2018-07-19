import { Component } from '@angular/core';

import { NavController, IonicPage } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { ApiProvider, DeviceProfileValidate } from 'mediserve-services';
import { BasePage } from '../../../../pages/base/BasePage';

@IonicPage()

@Component({
    selector: 'page-profile-verify-step1',
    templateUrl: 'profile-verify-step1.html'
})

export class profileVerifyStep1 extends BasePage {

    error: boolean;
    validate:boolean = true;
    email:boolean;
    dob:boolean;
    profile: DeviceProfileValidate = {
        applicationScope: this.svcsCtrl.homeService.getItem('applicationScope'),
        countryCode: this.svcsCtrl.homeService.getItem('countryCode'),
        phone: this.svcsCtrl.homeService.getItem('phone'),
        device: {},
        deviceToken: this.svcsCtrl.homeService.getItem('deviceToken'),
        email: this.svcsCtrl.homeService.getItem('email'),
        dateOfBirth: this.svcsCtrl.homeService.getItem('dateOfBirth'),
        gender: this.svcsCtrl.homeService.getItem('gender'),
        pin: ''
    };
    constructor(
        protected navCtrl: NavController,
        protected navParams: NavParams,
        protected svcsCtrl: ApiProvider
    ) {
        super(navCtrl, navParams, svcsCtrl);

        this.title = 'Profile Verify';

    }

    next() {
        if(this.profile.email && this.profile.dateOfBirth && this.profile.gender != null) {
            this.error = true;
        }
        if (this.profile.email == null){
            this.email = false;
        } else if(this.profile.dateOfBirth == null) {
            this.dob = false;
        }  else if (this.profile.gender == null) {
           this.validate = false;
        } else if(this.profile.email && this.profile.dateOfBirth && this.profile.gender != null) {
            this.profile.email = this.svcsCtrl.homeService.setItem('email', this.profile.email),
                this.profile.dateOfBirth = this.svcsCtrl.homeService.setItem('dateOfBirth', this.profile.dateOfBirth),
                this.profile.gender = this.svcsCtrl.homeService.setItem('gender', this.profile.gender)
            this.gotoProfileVerifyStep2();
        }

    }

}
