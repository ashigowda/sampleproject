import { Component } from '@angular/core';

import { NavController, IonicPage } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { ApiProvider } from 'mediserve-services';
import { BasePage } from '../../../../pages/base/BasePage';


@IonicPage()
@Component({
    selector: 'page-ebusiness-check-select',
    templateUrl: 'ebusiness-check-select.html'
})

export class ebusinessCheckSelect extends BasePage {

    constructor(
          protected navCtrl: NavController,
        protected navParams: NavParams,
        protected svcsCtrl: ApiProvider
    ) {
        super(navCtrl, navParams, svcsCtrl);
        this.title = 'Business Registration Check';
        this.message = "Initiating";
    }

    ionViewDidLoad() {
    }

    ionViewWillEnter() {
        this.svcsCtrl.clinicBusinessService.list().subscribe((response)=>{
            
            if(response.length == 0){
                this.navCtrl.push('ebusinessRegistrationStep1')
            }
            else{
                this.navCtrl.push('businessList')
            }
        })
      
    }

    // logIn() {
    //     this.navCtrl.push('tabs')
    // }

    register() {
        this.navCtrl.push('ebusinessRegistrationStep1')
    }
}
