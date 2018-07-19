import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { ApiProvider, ClinicPatientService, PatientResponse } from 'mediserve-services/lib';
import { BasePage } from '../../base/BasePage';
import { Observable } from 'rxjs/Observable';

@IonicPage({
  segment: 'patient/:clinicPatientId/prescription-add-contact-select',
  defaultHistory: ['contactSearch']
})

@Component({
  selector: 'page-prescription-add-contact-select',
  templateUrl: 'prescription-add-contact-select.html'
})

export class prescriptionAddContactSelect extends BasePage {

  patientId: any;
  clinicPatientId: any;
  patient:  Observable<PatientResponse>;
  title = 'Patient Select';
  params: ClinicPatientService.ReadParams;
  
  constructor(  protected navCtrl: NavController, protected navParams: NavParams, protected svcsCtrl: ApiProvider) {
    super(navCtrl, navParams, svcsCtrl);
    this.clinicPatientId = this.navParams.get('clinicPatientId'); 
    this.patientId = this.svcsCtrl.homeService.setItem('patientId', this.clinicPatientId);

    this.params = {
      patientId: this.svcsCtrl.homeService.getItem("patientId"),
      clinicId: this.svcsCtrl.homeService.getItem("clinicId")
    }
  }

  ionViewWillEnter() {
    this.patient =  this.svcsCtrl.clinicPatientService.read(this.params);
  }

  refresh(refresher) {
    this.svcsCtrl.homeService.reload(this.patient, refresher);
}

  writePrescription() {
    this.navCtrl.push('appointmentSelect')
  }

  changePatient() {
    this.navCtrl.push('contactSearch')
  }

} 