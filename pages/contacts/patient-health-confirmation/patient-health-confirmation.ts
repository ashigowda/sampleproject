import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams, ViewController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { ApiProvider, ClinicPatientService, PatientResponse } from 'mediserve-services/lib';
import { BasePage } from '../../base/BasePage';

@IonicPage()

@Component({
    selector: 'page-patient-health-confirmation',
    templateUrl: 'patient-health-confirmation.html'
})

export class patientHealthConfirmation extends BasePage {

    clinicPatientId: any;
    input: ClinicPatientService.ReadParams;
    patient: Observable<PatientResponse>;

    constructor(  protected navCtrl: NavController, protected navParams: NavParams, public viewCtrl: ViewController, protected svcsCtrl: ApiProvider) {
        super(navCtrl, navParams, svcsCtrl);
        this.title = "Patient Health Confirmation"
        this.clinicPatientId = this.navParams.get('clinicPatientId')
    }

    ionViewWillEnter() {
        this.viewCtrl.showBackButton(false);
        this.input = {
            patientId: this.navParams.get('clinicPatientId'),
            clinicId: this.svcsCtrl.homeService.getItem('clinicId')
        }
        this.patient = this.svcsCtrl.clinicPatientService.read(this.input)
    }

    
    gotoNextPage() {
        
            this.navCtrl.push('patientHealthView', { clinicPatientId: this.clinicPatientId })
                .then(() => {
                    const startIndex = this.navCtrl.getActive().index - 5;
                    this.navCtrl.remove(startIndex, 5);
                });
                
    }

}