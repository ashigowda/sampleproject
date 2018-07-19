import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams } from 'ionic-angular';
import { ApiProvider } from 'mediserve-services/lib';
import { BasePage } from '../../base/BasePage';

@IonicPage({
  // name:'apponitment'
})
@Component({
  selector: 'page-patient-add-step2',
  templateUrl: 'patient-add-step2.html'
})

export class patientAddStep2 extends BasePage {
  tabIndex: string = "0";
  title = "Add Patient";
  var: any;
  constructor(  protected navCtrl: NavController,
    protected navParams: NavParams,
    protected svcsCtrl: ApiProvider) {
    super(navCtrl, navParams, svcsCtrl);
    // this.patient = new Patient();
    // this.readPatient();
  }
  
  save() {
    // this.setPatient()
    
  }

  cancel() {
    this.navCtrl.push('userList')
  }

}