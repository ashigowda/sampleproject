import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { ApiProvider, ClinicUserTemplate, ClinicUserService } from 'mediserve-services';
import { BasePage } from '../../base/BasePage';

@IonicPage({
    segment: 'business/staff-add',
    defaultHistory: ['StaffList']

})

@Component({
    selector: 'page-staff-add',
    templateUrl: 'staff-add.html'
})

export class staffAdd extends BasePage {

    user: ClinicUserTemplate;
    params: ClinicUserService.CreateParams;
    tabIndex: string = "0";
    constructor(protected navCtrl: NavController,
        protected navParams: NavParams,
        protected svcsCtrl: ApiProvider
    ) {
        super(navCtrl, navParams, svcsCtrl)
        this.title = 'User Add';
        this.user = {
            user: {
                firstName: '',
                lastName: '',
                email: '',
                pin: '',
                dateOfBirth: '',
                gender: '',
                address: {
                },
                notification: {
                    email: true,
                    text: true,
                    newsLetter: true,
                }
            },
            manager: false,
            sales: false,
            delivery: false,
        }
    }

    add() {
        console.log('user is ' + JSON.stringify(this.user))
        this.params = {
            clinicId: this.svcsCtrl.homeService.getItem("clinicId"),
            body: this.user
        }
        this.svcsCtrl.clinicUserService.create(this.params).subscribe((response) => {
            console.log('creted staff is' + JSON.stringify(response))
            this.navCtrl.push("StaffList")
        }, (err) => {
            console.log(err)
        })
    }


    cancel() {
        this.navCtrl.push('StaffList')
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