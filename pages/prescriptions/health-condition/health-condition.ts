import { NavController, IonicPage, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import { ApiProvider, ClinicPatientAppointmentService } from 'mediserve-services/lib';
import { BasePage } from '../../base/BasePage';
import { AppointmentResponse } from 'mediserve-services/lib/api/models/appointment-response';
import { Observable } from 'rxjs/Observable';

@IonicPage({
    segment: 'prescription/patient/:clinicPatientId/appointment/:appointmentId/health-condition',
    defaultHistory: ['medicationAllergy']
})

@Component({
    selector: 'page-health-condition',
    templateUrl: 'health-condition.html'
})

export class healthCondition extends BasePage {

    appointment: Observable<AppointmentResponse>;
    clinicPatientId: any;
    edit: any;
    title: any;
    params: ClinicPatientAppointmentService.ReadParams;
    
    constructor(
          protected navCtrl: NavController,
        public navParam: NavParams,
        protected svcsCtrl: ApiProvider) {
        super(navCtrl, navParam, svcsCtrl);

        this.clinicPatientId = this.navParams.get('clinicPatientId');
        this.edit = this.navParam.get('edit')
        this.title = "Health Conditions";

    }

    ionViewDidLoad() {
        this.params = {
            clinicId: this.svcsCtrl.homeService.getItem("clinicId"),
            appointmentId: this.svcsCtrl.homeService.getItem("appointmentId")
        }
        this.appointment = this.svcsCtrl.clinicPatientAppointmentService.read(this.params);
    }

    gotoPrescriptionAddPage() {
        this.navCtrl.push('prescriptionAddStep1')
    }

    refresh(refresher) {
        this.svcsCtrl.homeService.reload(this.appointment, refresher);
    }

}