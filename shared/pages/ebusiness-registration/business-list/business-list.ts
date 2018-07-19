import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams } from 'ionic-angular';
import { ApiProvider, ClinicResponse } from 'mediserve-services';
import { BasePage } from '../../../../pages/base/BasePage';
import { Observable } from 'rxjs/Observable';

@IonicPage()

@Component({
    selector: 'page-business-list',
    templateUrl: 'business-list.html'
})

export class businessList extends BasePage {


    clinicList: Observable<ClinicResponse[]>;
    constructor(
          protected navCtrl: NavController,
        protected navParams: NavParams,
        protected svcsCtrl: ApiProvider
    ) {
        super(navCtrl, navParams, svcsCtrl);
        this.title = "Businesss";
    }

    ionViewWillEnter() {
       // this.businessList()
       this.clinicList =  this.svcsCtrl.clinicBusinessService.list()
    }
    
    selectedClinic(clinicId) {
        console.log('in select' + JSON.stringify(clinicId))
        this.svcsCtrl.homeService.setItem('clinicId', clinicId)
        this.svcsCtrl.clinicBusinessService.read(clinicId).subscribe((response) => {
            this.gotoRegisteredHome();
        }, (err) => {
            console.log(err)
        })

    }

}