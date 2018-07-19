import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, AlertController, IonicPage } from 'ionic-angular';
import { ApiProvider, ClinicPatientAppointmentService, AppointmentResponse } from 'mediserve-services/lib';
import { BasePage } from '../../base/BasePage';
import { Observable } from 'rxjs/Observable';

@IonicPage({
  segment: 'appointment-details/:appointmentId',
  defaultHistory: ['appointmentList']
})

@Component({
  selector: 'page-appointment-details',
  templateUrl: 'appointment-details.html'
})

export class appointmentDetails extends BasePage {

  appointment: Observable<AppointmentResponse>;
  currentDate: any;
  title = "Appontment Details";
  show: any;
  small = 'small'
  params: ClinicPatientAppointmentService.ReadParams;
  cancel: ClinicPatientAppointmentService.CancelParams;
  startParams: ClinicPatientAppointmentService.StartVisitParams;

  constructor(
    protected navCtrl: NavController,
    protected navParams: NavParams,
    public modal: ModalController,
    public alertCtrl: AlertController,
    protected svcsCtrl: ApiProvider) {
    super(navCtrl, navParams, svcsCtrl);
    this.currentDate = new Date().toLocaleDateString();

    this.params = {
      clinicId: this.svcsCtrl.homeService.getItem("clinicId"),
      appointmentId: this.svcsCtrl.homeService.getItem("appointmentId")
    }
    
  }

  ionViewWillEnter() {
    this.appointment = this.svcsCtrl.clinicPatientAppointmentService.read(this.params);
  }

  refresh(refresher) {
    this.svcsCtrl.homeService.reload(this.appointment, refresher);
  }

  CancelAppointment() {
    let alert = this.alertCtrl.create({
      title: 'Cancel Appointment',
      message: 'Would You like to cancel this Appointment?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
         this.svcsCtrl.clinicPatientAppointmentService.cancel(this.params).subscribe((response) =>{
              this.navCtrl.push('appointmentList')
            })
          }
        },
        {
          text: 'No',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    alert.present();
  }

  WritePrescription() {
    this.navCtrl.push('medicationAllergy')
  }

  visitPatient(clinicPatientId) {
    this.navCtrl.push('patientVisit',{clinicPatientId})
  }

  backTolist() {
    this.navCtrl.setRoot('appointmentList')
  }

  gotoinvoiceDetails() {
    this.navCtrl.push('invoiceDetails')
  }

  call() {
    alert("need to be implemented")
  }

}