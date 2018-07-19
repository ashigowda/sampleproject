import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { ApiProvider, PatientResponse, ClinicPatientService } from 'mediserve-services/lib';
import { BasePage } from '../../base/BasePage';
import { Observable } from 'rxjs/Observable';

@IonicPage({
  segment: ':clinicPatientId/contact-select',
  defaultHistory: ['appointmentAddcontactSearch']
})
@Component({
  selector: 'page-contact-select',
  templateUrl: 'contact-select.html'
})

export class contactSelect extends BasePage {

  patient: Observable<PatientResponse>;
  patientId: any;
  clinicPatientId: any;
  data: any;
  data1: any;
  clinicId = this.svcsCtrl.homeService.getItem('clinicId')
  title = "Patient Select";
  params: ClinicPatientService.ReadParams;
  constructor(  protected navCtrl: NavController,
    protected navParams: NavParams,
    protected svcsCtrl: ApiProvider) {
    super(navCtrl, navParams, svcsCtrl);
    this.data1 = this.navParams.get('data1')
    this.data = this.navParams.get('data');

    this.clinicPatientId = this.navParams.get('clinicPatientId'); 
    this.patientId = this.svcsCtrl.homeService.setItem('patientId', this.clinicPatientId)
   
  }
  ionViewWillEnter() {
    this.params = {
      clinicId: this.clinicId,
      patientId: this.svcsCtrl.homeService.getItem('patientId')
    }
    this.patient =  this.svcsCtrl.clinicPatientService.read(this.params);
  }

  changePatient() {
    this.navCtrl.push('appointmentAddcontactSearch')
  }

  bookAppointment() {
    this.navCtrl.push('appointmentAddStep1')
  }
  bookAppointment1() {

  }
}