import { Component, Directive } from '@angular/core';
import { NavController, IonicPage, NavParams } from 'ionic-angular';
import { ApiProvider, ClinicPatientService, PatientResponse, UserTemplate } from 'mediserve-services/lib';
import { BasePage } from '../../base/BasePage';
import { Observable } from 'rxjs/Observable';

@IonicPage({
  segment: 'patient-edit/:clinicPatientId',
  defaultHistory: ['patientList']
})
@Component({
  selector: 'page-patient-edit',
  templateUrl: 'patient-edit.html'
})
@Directive({
  selector: '[myTabIndex]'
})

export class patientEdit extends BasePage {

  patient: Observable<PatientResponse>;
  patientUpdate: PatientResponse;
  input: ClinicPatientService.ReadParams;
  profile: Observable<UserTemplate>;
  inputUpdate: ClinicPatientService.UpdateParams;
  patientId: any;
  clinicId: any;
  tabIndex: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public svcsCtrl: ApiProvider,
  ) {
    super(navCtrl, navParams, svcsCtrl)

    this.tabIndex = '0';
    this.title = "Patient Edit";
    this.patientId = this.navParams.get('clinicPatientId');
    this.clinicId = this.svcsCtrl.homeService.getItem('clinicId')
    this.input = {
      patientId: this.patientId,
      clinicId: this.clinicId
    }
  }

  ionViewDidLoad() {
    this.patient = this.svcsCtrl.clinicPatientService.read(this.input)
  }
  
  refresh(refresher) {
    this.svcsCtrl.homeService.reload(this.patient, refresher);
  }

  update(member) {
    this.inputUpdate = {
      patientId: this.patientId,
      clinicId: this.clinicId,
      body: {
        doctor: member.doctor,
        familyName: member.familyName,
        phone: member.phone,
        firstName: member.firstName,
        lastName: member.lastName,
        age: member.age,
        gender: member.gender,
        email: member.email
      }
    }
    
    this.svcsCtrl.clinicPatientService.update(this.inputUpdate).subscribe((response) => {
      this.patientUpdate = response;
      this.navCtrl.pop();
    }, (err) => {
      console.log('err message is' + JSON.stringify(err))
    })

    
  }

  cancel() {
    this.navCtrl.pop();
  }

}