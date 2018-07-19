import { NavController, IonicPage, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import { ApiProvider, ClinicPatientAppointmentService, AppointmentResponse } from 'mediserve-services/lib';
import { BasePage } from '../../base/BasePage';
import { Observable } from 'rxjs/Observable';

@IonicPage({
    segment: 'prescription/patient/:clinicPatientId/appointment/:appointmentId/medication-allergies',
    defaultHistory: ['appointmentSelect'],
})

@Component({
    selector: 'page-medication-allergy',
    templateUrl: 'medication-allergy.html'
})

export class medicationAllergy extends BasePage {

    appointment: Observable<AppointmentResponse>;
    edit: any;
    title: any;
    params: ClinicPatientAppointmentService.ReadParams;
    constructor(
          protected navCtrl: NavController,
        public navParam: NavParams,
        protected svcsCtrl: ApiProvider) {
        super(navCtrl, navParam, svcsCtrl);
        this.title = 'Medication Allergies';
    }

    ionViewDidLoad() {
        this.params = {
            clinicId: this.svcsCtrl.homeService.getItem("clinicId"),
            appointmentId: this.svcsCtrl.homeService.getItem("appointmentId")
        }
        this.appointment = this.svcsCtrl.clinicPatientAppointmentService.read(this.params);
    }

    refresh(refresher) {
        this.svcsCtrl.homeService.reload(this.appointment, refresher);
    }


    gotoHealthPage() {
        this.navCtrl.push('healthCondition')
    }

}