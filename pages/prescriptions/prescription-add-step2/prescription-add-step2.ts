import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { ApiProvider, ClinicPatientAppointmentService, ClinicPatientPrescriptionService, Prescription } from 'mediserve-services/lib';
import { tabs } from '../../tabs/tabs';
import { BasePage } from '../../base/BasePage';
import { AppointmentResponse } from 'mediserve-services/lib/api/models/appointment-response';
import { Observable } from 'rxjs/Observable';
import { PrescriptionResponse } from 'mediserve-services/lib/api/models/prescription-response';

@IonicPage({
  segment: 'prescription/patient/:clinicPatientId/appointment/:appointmentId/prescription-add-step2',
  defaultHistory: ['prescriptionAddStep1']
})

@Component({
  selector: 'page-prescription-add-step2',
  templateUrl: 'prescription-add-step2.html'
})

export class prescriptionAddStep2 extends BasePage {
  tabs: tabs;
  title: any = "Confirmation"
  show: any = "true";
  edit: any;

  prescriptionItems: any = [];
  prescription: Prescription;
  prescriptionItem: any = {};

  appointment: Observable<AppointmentResponse>;
  appointment1: any;
  params: ClinicPatientAppointmentService.ReadParams;
  input: ClinicPatientPrescriptionService.ReadParams;
  create: ClinicPatientPrescriptionService.CreateParams;
  createP: Observable<PrescriptionResponse>;

  prescriptionItemId = this.svcsCtrl.homeService.getItem("prescriptionItemId");
  appointmentId = this.svcsCtrl.clinicPatientAppointmentService.getItem('appointmentId');
  patientId = this.svcsCtrl.homeService.getItem('patientId');

  constructor(
    protected navCtrl: NavController,
    public navParam: NavParams,
    protected svcsCtrl: ApiProvider) {
    super(navCtrl, navParam, svcsCtrl);
    this.tabs = this.navCtrl.parent;

  }

  ionViewWillEnter() {
    this.params = {
      clinicId: this.svcsCtrl.homeService.getItem("clinicId"),
      appointmentId: this.svcsCtrl.homeService.getItem("appointmentId")
    }
    this.appointment = this.svcsCtrl.clinicPatientAppointmentService.read(this.params);
    this.readPrescriptionItem();

  }


  readPrescriptionItem() {
    this.prescriptionItems = this.svcsCtrl.homeService.getItem('prescriptionItems');
  }

  async done(appointments) {
    this.create = {
      clinicId: this.svcsCtrl.homeService.getItem("clinicId"),
      body: {
        appointment: appointments._id,
        doctor: appointments.doctor._id,
        patient: appointments.patient._id,
        items: this.prescriptionItems
      }
    }

    this.svcsCtrl.clinicPatientPrescriptionService.create(this.create).subscribe((response) => {
      let prescription = response;
      console.log("create prescription" + JSON.stringify(prescription));
      this.prescriptionItems = null;
      this.svcsCtrl.homeService.setItem('prescriptionItems', this.prescriptionItems);
      this.navCtrl.parent.select(3);
    })

  }
}