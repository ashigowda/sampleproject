import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams } from 'ionic-angular';
import { ApiProvider, ClinicPatientPrescriptionService, PrescriptionResponse } from 'mediserve-services/lib';
import { BasePage } from '../../base/BasePage';
import { Observable } from 'rxjs/Observable';

@IonicPage({
    segment: 'patient/:clinicPatientId/prescription-history',
    defaultHistory: ['patientInformation']
})

@Component({
    selector: 'page-prescription-history',
    templateUrl: 'prescription-history.html'
})

export class PrescriptionHistory extends BasePage {

    prescriptions: Observable<PrescriptionResponse[]>;
    input: ClinicPatientPrescriptionService.ListByPatientParams;
    start: number = 7;

    constructor(
        protected navCtrl: NavController,
        protected navParams: NavParams,
        protected svcsCtrl: ApiProvider
    ) {
        super(navCtrl, navParams, svcsCtrl);
        this.title = "Prescription History"
        this.input = {
            patientId: this.navParams.get('clinicPatientId'),
            clinicId: this.svcsCtrl.homeService.getItem('clinicId')
        }
    }

    ionViewWillEnter() {
        this.prescriptions = this.svcsCtrl.clinicPatientPrescriptionService.listByPatient(this.input);
        this.prescriptions = this.prescriptions.map(prescription => prescription.sort((a,b) => this.getDate(a.createdDate) > this.getDate(a.createdDate)? -1 : 1 ))
    }

    getDate(date){
        let date1 = new Date(date).toLocaleDateString();
        return date1;
    }
    refresh(refresher) {
        this.svcsCtrl.homeService.reload(this.prescriptions, refresher);
    }

    viewprescription(prescriptionId) {
        this.svcsCtrl.homeService.setItem('prescriptionId',prescriptionId);
        this.navCtrl.push('prescriptionDetails',{prescriptionId,history:'history'})
    }

   doInfinite(infiniteScroll) {
        console.log('Begin async operation');
        this.start += 2;
        console.log('Async operation has ended');
        infiniteScroll.complete();
    }

}