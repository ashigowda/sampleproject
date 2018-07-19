import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams, App } from 'ionic-angular';
import { ApiProvider, ClinicResponse, UserTemplate } from 'mediserve-services/lib';
import { BasePage } from '../../base/BasePage';
import { Observable } from 'rxjs/Observable';

@IonicPage()

@Component({
    selector: 'page-account-management',
    templateUrl: 'account-management.html'
})

export class accountManagement extends BasePage {

    business: Observable<ClinicResponse>;
    profile: Observable<UserTemplate>;
    title = "My Account"

    updateAvailable: boolean = true;
    clinicId = this.svcsCtrl.homeService.getItem('clinicId');

    navList: any = [
        {
            order: 'Profile Settings',
            page: 'profileDetails',
            icon: 'person'
        },
        {
            order: 'Business Management',
            page: 'businessManagement',
            icon: 'podium'
        },
        {
            order: 'History',
            page: 'historyManagement',
            icon: 'archive'
        },
        {
            order: 'Invoices',
            page: 'invoices',
            icon: 'paper'
        }
    ]

    constructor(
        protected navCtrl: NavController,
        protected navParams: NavParams,
        protected svcsCtrl: ApiProvider,
        public app: App
    ) {
        super(navCtrl, navParams, svcsCtrl);
        this.title = "MediServe";
    }

    ionViewWillEnter() {
        this.profile = this.svcsCtrl.profileService.read();
        this.business = this.svcsCtrl.clinicBusinessService.read(this.clinicId)
    }

    signOut() {
        this.svcsCtrl.authSignService.logout().subscribe((response) => {
            window.open("/#/signout", '_self');
        }, (err) => {
            console.log(err);
        }
        )
    }

    selectClinic() {
        this.app.getRootNav().setRoot('businessList');
    }

    updateApp() {
        this.navCtrl.push('updateManagement')
    }



}