import { Component } from '@angular/core';
import { NavController, ViewController, NavParams, IonicPage } from 'ionic-angular';
import { ApiProvider, ClinicPatientPrescriptionService, ClinicPatientAppointmentService, PrescriptionResponse } from 'mediserve-services/lib';
import { BasePage } from '../../base/BasePage';
import { AppointmentResponse } from 'mediserve-services/lib/api/models/appointment-response';
import { Observable } from 'rxjs/Observable';

@IonicPage({
    segment: 'prescriptionItem-edit/:prescriptionId',
    defaultHistory: ['prescriptionDetails']
})

@Component({
    selector: 'page-prescriptionItem-edit',
    templateUrl: 'prescriptionItem-edit.html'
})

export class prescriptionItemEdit extends BasePage {

    appointment: Observable<AppointmentResponse>;
    prescriptionItemId: any;
    prescription: Observable<PrescriptionResponse>;
    input: ClinicPatientPrescriptionService.ReadParams;
    params: ClinicPatientAppointmentService.ReadParams;

    constructor(
        protected navCtrl: NavController,
        protected navParams: NavParams,
        protected svcsCtrl: ApiProvider

    ) {
        super(navCtrl, navParams, svcsCtrl);
        this.title = "Edit Prescription Items";
    }

    ionViewWillEnter() {
        this.input = {
            prescriptionId: this.svcsCtrl.homeService.getItem('prescriptionId'),
            clinicId: this.svcsCtrl.homeService.getItem('clinicId')
        }
        this.prescription = this.svcsCtrl.clinicPatientPrescriptionService.read(this.input);
    }

    edit(id) {
        this.prescriptionItemId = this.svcsCtrl.homeService.setItem("prescriptionItemId", id)
        this.navCtrl.push('prescriptionDrugEdit')
    }

    details() {
        this.navCtrl.push('prescriptionDetails').then(() => {
            const startIndex = this.navCtrl.getActive().index - 2;
            this.navCtrl.remove(startIndex, 2);
        });
    }
}