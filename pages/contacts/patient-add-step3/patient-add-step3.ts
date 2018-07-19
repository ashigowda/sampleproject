import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams } from 'ionic-angular';
import { ApiProvider } from 'mediserve-services/lib';
import { BasePage } from '../../base/BasePage';

@IonicPage()
@Component({
    selector: 'page-patient-add-step3',
    templateUrl: 'patient-add-step3.html'
})

export class patientAddStep3 extends BasePage {

    title = "Add Patient"

    constructor(  protected navCtrl: NavController,
        protected navParams: NavParams,
        protected svcsCtrl: ApiProvider) {
        super(navCtrl, navParams, svcsCtrl);
        // this.clinicPatient = new ClinicPatient();
    }
    ionViewWillEnter() {
        // this.readPatient();
    }

    save() {
        // this.setContact();
    }

    addPatient() {
        this.navCtrl.push('patientAdd')
    }
    cancel(){
        this.navCtrl.push('patientAddStep4')
    }

}
