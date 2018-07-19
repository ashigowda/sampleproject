import { Component } from '@angular/core';
import { IonicPage, NavParams, NavController } from 'ionic-angular';
import { ApiProvider, OpeningHour, ClinicOpeningHourService } from "mediserve-services";
import { BasePage } from '../../base/BasePage';

@IonicPage({
    defaultHistory: ['openinghours'],
    segment: 'openinghours-add/:openingHourId'
})

@Component({
    selector: 'page-openingHours-add',
    templateUrl: 'openingHours-add.html'
})
export class openinghoursAdd extends BasePage {

    openingHours: OpeningHour;
    params: ClinicOpeningHourService.CreateParams;
    constructor(public navParams: NavParams,
        protected navCtrl: NavController,
        protected svcsCtrl: ApiProvider
    ) {
        super(navCtrl, navParams, svcsCtrl);
        this.title = "OpeningHours Add";

        this.openingHours = {
            dayOfWeek: '',
            closes: '',
            opens: ''
        }
    }

add(){
    this.params = {
        clinicId:this.svcsCtrl.homeService.getItem('clinicId'),
        body:this.openingHours
    }
    this.svcsCtrl.clinicOpeningHourService.create(this.params).subscribe((response) =>{
        this.navCtrl.push('openingHoursList')
    })
}
}