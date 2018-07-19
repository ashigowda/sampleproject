import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams } from 'ionic-angular';
import { ApiProvider, ClinicResponse, UserTemplate } from 'mediserve-services';
import { BasePage } from '../../../../pages/base/BasePage';
import { Observable } from 'rxjs/Observable';
@IonicPage()

@Component({
    selector: 'page-ebusiness-home-register',
    templateUrl: 'ebusiness-home-register.html'
})
export class ebusinessHomeRegister extends BasePage {

    business: Observable<ClinicResponse>;
    profile: Observable<UserTemplate>;
    clinicId = this.svcsCtrl.homeService.getItem('clinicId');

    navList: any = [
        {
            order: 'Register Clinic',
            page: 'ebusinessRegistrationStep1',
            icon: 'settings'
        },

    ]

    constructor(
        protected navCtrl: NavController,
        protected navParams: NavParams,
        protected svcsCtrl: ApiProvider
    ) {
        super(navCtrl, navParams, svcsCtrl);
        this.title = "MediServe";
    }

    ionViewWillEnter() {
        this.profile = this.svcsCtrl.profileService.read();
        this.business = this.svcsCtrl.clinicBusinessService.read(this.clinicId)
    }


}