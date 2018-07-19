import { Component } from '@angular/core';
import { NavParams, NavController, IonicPage } from 'ionic-angular';
import { ApiProvider, ClinicResponse, ClinicBusinessService } from "mediserve-services";
import { Observable } from 'rxjs/Observable';
import { BasePage } from '../../base/BasePage';

@IonicPage({
    segment: 'business-settings/:businessId/edit',
    defaultHistory: ['clinicSettings']
})

@Component({
    selector: 'page-clinic-settings-edit',
    templateUrl: 'clinic-settings-edit.html'
})

export class clinicSettingsEdit extends BasePage {


    business: ClinicResponse;
    clinicId = this.svcsCtrl.homeService.getItem('clinicId');
    input: ClinicBusinessService.UpdateParams
    tabIndex: string = "0";

    constructor(public navParams: NavParams,
        protected navCtrl: NavController,
        protected svcsCtrl: ApiProvider
    ) {
        super(navCtrl, navParams, svcsCtrl);
        this.title = "Edit Business Details";
    }

    ionViewDidLoad() {
        this.svcsCtrl.clinicBusinessService.read(this.clinicId).subscribe((response) =>{
            this.business = response;
        })
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

    update(business) {
        this.input = {
            clinicId: this.clinicId,
            body: this.business
        }
        this.svcsCtrl.clinicBusinessService.update(this.input).subscribe((response) => {

            this.navCtrl.push('clinicSettings').then(() => {
                const startIndex = this.navCtrl.getActive().index - 2;
                this.navCtrl.remove(startIndex, 2);
            });
        })

    }

    cancel() {
        this.navCtrl.pop();
    }

}