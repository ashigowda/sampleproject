import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, IonicPage } from 'ionic-angular';
import { ApiProvider, ClinicOpeningHourService, OpeningHourReponse } from "mediserve-services";
import { BasePage } from '../../base/BasePage';

@IonicPage({
    segment: 'openinghours-edit/:openingHourId',
    defaultHistory: ['openinghours']
})

@Component({
    selector: 'page-openinghours-edit',
    templateUrl: 'openinghours-edit.html'
})

export class openinghoursEdit extends BasePage {


    openingHours: OpeningHourReponse = {};
    params: ClinicOpeningHourService.UpdateParams;
    input: ClinicOpeningHourService.ReadParams
    clinicId = this.svcsCtrl.homeService.getItem('clinicId');

    constructor(public navParams: NavParams,
        protected navCtrl: NavController,
        public view: ViewController,
        protected svcsCtrl: ApiProvider
    ) {
        super(navCtrl, navParams, svcsCtrl);
        this.title = 'Opening Hour'
    }

    ionViewWillEnter() {
        this.input = {
            clinicId:this.clinicId,
            openingHourId:this.svcsCtrl.homeService.getItem('openingHoursId')
        }
       
        this.svcsCtrl.clinicOpeningHourService.read(this.input).subscribe((response) => {
            this.openingHours = response;
            console.log("opening hours" + JSON.stringify(this.openingHours))
        })
    }

    update() {

        this.params = {
            clinicId: this.svcsCtrl.homeService.getItem('clinicId'),
            openingHourId: this.svcsCtrl.homeService.getItem('openingHoursId'),
            body: this.openingHours
        }

        this.svcsCtrl.clinicOpeningHourService.update(this.params).subscribe((response) =>{
            console.log("updated opening hours" + JSON.stringify(response))
            this.navCtrl.push('openingHoursList').then(() => {
                const startIndex = this.navCtrl.getActive().index - 2;
                this.navCtrl.remove(startIndex, 2);
            });
        })
    }

    dismiss() {
        this.view.dismiss();
    }

}