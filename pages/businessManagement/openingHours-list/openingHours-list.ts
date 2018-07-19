import { Component } from '@angular/core';
import { NavParams, NavController, IonicPage } from 'ionic-angular';
import { ApiProvider, ClinicResponse, OpeningHourReponse, ClinicOpeningHourService } from "mediserve-services";
import { BasePage } from '../../base/BasePage';
import { Observable } from 'rxjs/Observable';

@IonicPage({
    defaultHistory: ['businessManagement']
})

@Component({
    selector: 'page-openingHours-list',
    templateUrl: 'openingHours-list.html'
})

export class openingHoursList extends BasePage {

    clinicId = this.svcsCtrl.homeService.getItem('clinicId')
    openingHoursList: Observable<OpeningHourReponse[]>;
    params: ClinicOpeningHourService.DeleteParams
    business: Observable<ClinicResponse>;

    constructor(public navParams: NavParams,
        protected navCtrl: NavController,
        protected svcsCtrl: ApiProvider
    ) {
        super(navCtrl, navParams, svcsCtrl);
        this.title = "Opening Hours";
    }

    ionViewWillEnter() {
        this.openingHoursList = this.svcsCtrl.clinicOpeningHourService.list(this.clinicId)
    }

    add() {
        this.navCtrl.push('openinghoursAdd')
    }

    edit(id) {
        this.svcsCtrl.homeService.setItem('openingHoursId', id)
        this.navCtrl.push('openinghoursEdit')
    }

    delete(id) {
        this.params = {
            clinicId: this.clinicId,
            openingHourId: id
        }

        this.openingHoursList = this.svcsCtrl.clinicOpeningHourService.delete(this.params)
    }
}