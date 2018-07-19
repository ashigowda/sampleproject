import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams } from 'ionic-angular';
import { ApiProvider, PatientTemplate, ClinicPatientService, } from 'mediserve-services/lib';
import { BasePage } from '../../base/BasePage';

@IonicPage({
  // name:'apponitment'
})
@Component({
  selector: 'page-patient-add-step1',
  templateUrl: 'patient-add-step1.html'
})

export class patientAddStep1 extends BasePage {
  phone: any;
  title = "Add Patient";
  clinicPatient: PatientTemplate;
  input: ClinicPatientService.CreateParams;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public svcsCtrl: ApiProvider) {
    super(navCtrl, navParams, svcsCtrl);
    
    this.clinicPatient = {
      doctor: '',
      familyName: '',
      phone: this.navParams.get('phone'),
      firstName: '',
      lastName: '',
      age: 0,
      gender: '',
      email: '',
    }

  }
  ionViewDidEnter() {

  }

  save() {
    this.input = {
      clinicId: this.svcsCtrl.homeService.getItem('clinicId'),
      body: this.clinicPatient,
    }
    this.svcsCtrl.clinicPatientService.create(this.input).subscribe((response) => {
      console.log("created patient" + JSON.stringify(response))
      this.navCtrl.setRoot('patientList')
    }, (err) => {
      console.log("create patient" + JSON.stringify(err))
    })
  }

  cancel() {
    this.navCtrl.push('userList')
  }

}