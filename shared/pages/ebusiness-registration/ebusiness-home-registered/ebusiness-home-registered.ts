import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams } from 'ionic-angular';
import { ApiProvider, UserTemplate, ClinicResponse } from 'mediserve-services';
import { BasePage } from '../../../../pages/base/BasePage';
import { Observable } from 'rxjs/Observable';

@IonicPage()

@Component({
    selector: 'page-ebusiness-home-registered',
    templateUrl: 'ebusiness-home-registered.html'
})
export class ebusinessHomeRegistered extends BasePage {


    profile: Observable<UserTemplate>;
    business: Observable<ClinicResponse>;
    navList: any = [
        {
            order: 'Business Settings',
            page: 'clinicSettings',
            icon: 'settings'
        },
        {
            order: 'Verify Business',
            page: 'ebusinessVerify',
            icon: 'ios-settings-outline'
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
    ionViewDidLoad() {
        this.profile = this.svcsCtrl.profileService.read();
        this.business = this.svcsCtrl.clinicBusinessService.read(this.svcsCtrl.homeService.getItem('clinicId'))
    }


}