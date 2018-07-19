import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { ApiProvider, ClinicUserService, ClinicUserResponse } from 'mediserve-services/lib';
import { BasePage } from '../../base/BasePage';

@IonicPage({
    segment: 'staff-edit/:userId',
    defaultHistory: ['StaffList']
})
@Component({
    selector: 'page-staff-edit',
    templateUrl: 'staff-edit.html'
})

export class staffEdit extends BasePage {

    user1: any;
    user: ClinicUserResponse;
    tabIndex: string = "0";
    input: ClinicUserService.ReadParams;
    params: ClinicUserService.UpdateParams

    constructor(
        protected navCtrl: NavController,
        protected navParams: NavParams,
        public svclCtrl: ApiProvider) {
        super(navCtrl, navParams, svclCtrl);
        this.title = "User Edit";
    }

    ionViewDidLoad() {
        this.input = {
            clinicId: this.svcsCtrl.homeService.getItem("clinicId"),
            clinicUserId: this.svcsCtrl.homeService.getItem('userId')
        }
        this.svcsCtrl.clinicUserService.read(this.input).subscribe((response) => {
            console.log('response' + JSON.stringify(response))
            this.user = response;
        })


    }

    save() {
        this.params = {
            clinicId: this.svcsCtrl.homeService.getItem("clinicId"),
            clinicUserId: this.svcsCtrl.homeService.getItem('userId'),
            body: this.user
        }

        this.svclCtrl.clinicUserService.update(this.params).subscribe((response) => {
            this.navCtrl.push('StaffList').then(() => {
                const startIndex = this.navCtrl.getActive().index - 2;
                this.navCtrl.remove(startIndex, 2);
            });
        }, (err) => {
            console.log(err)
        })
    }

    cancel() {
        this.navCtrl.push('staffDetails').then(() => {
            const startIndex = this.navCtrl.getActive().index - 2;
            this.navCtrl.remove(startIndex, 2);
        });
    }

    ionViewWillEnter() {
        let tabs = document.querySelectorAll('.tabbar');
        if (tabs !== null) {
            Object.keys(tabs).map( key => {
                tabs[key].style.transform = 'translateY(56px)';
            });
        }
    }

    ionViewWillLeave() {
        let tabs = document.querySelectorAll('.tabbar');
        if (tabs !== null) {
            Object.keys(tabs).map( key => {
                tabs[key].style.transform = 'translateY(0)';
            });
        }
    }

}