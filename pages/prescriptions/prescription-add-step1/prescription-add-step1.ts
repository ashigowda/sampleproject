import { Component } from '@angular/core';
import { NavController, ModalController, IonicPage, NavParams } from 'ionic-angular';
import { ApiProvider,  ClinicPatientAppointmentService, AppointmentResponse, ClinicPatientPrescriptionService } from 'mediserve-services/lib';
import { BasePage } from '../../base/BasePage';
import { Observable } from 'rxjs/Observable';

@IonicPage({
  segment: 'prescription/patient/:clinicPatientId/appointment/:appointmentId/prescription-add-step1',
  defaultHistory: ['healthCondition']
})
@Component({
  selector: 'page-prescription-add-step1',
  templateUrl: 'prescription-add-step1.html'
})

export class prescriptionAddStep1 extends BasePage {


  prescriptionItems: any = [];
  appointment:  Observable<AppointmentResponse>;
  title = 'Write Prescription'

  show = 'false'
  params: ClinicPatientAppointmentService.ReadParams;
  input: ClinicPatientPrescriptionService.ReadParams;

  prescriptionItemId = this.svcsCtrl.homeService.getItem("prescriptionItemId");
  appointmentId = this.svcsCtrl.homeService.getItem('appointmentId');
  patientId = this.svcsCtrl.homeService.getItem('patientId');

  constructor(
      protected navCtrl: NavController,
    public modal: ModalController,
    public navParam: NavParams,
    protected svcsCtrl: ApiProvider) {
    super(navCtrl, navParam, svcsCtrl);

  }

  ionViewWillEnter() {
    this.params = {
        clinicId: this.svcsCtrl.homeService.getItem("clinicId"),
        appointmentId: this.svcsCtrl.homeService.getItem("appointmentId")
    }
    this.appointment = this.svcsCtrl.clinicPatientAppointmentService.read(this.params);
    this.readPrescriptionItem();
}

refresh(refresher) {
  this.svcsCtrl.homeService.reload(this.appointment, refresher);
}

  readPrescriptionItem(){
     this.prescriptionItems = this.svcsCtrl.homeService.getItem('prescriptionItems');
  }
  confirm() {
    this.navCtrl.push('prescriptionAddStep2')
  }

  addMoreItem() {
    this.navCtrl.push('prescriptionDrugAdd')
  }

}