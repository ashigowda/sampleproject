import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { ApiProvider, PatientResponse } from 'mediserve-services/lib';
import { BasePage } from '../../base/BasePage';
import { Observable } from 'rxjs/Observable';

@IonicPage({
  segment: 'prescriptions/contact/contact-search',
  defaultHistory: ['prescriptionList']
})

@Component({
  selector: 'page-contact-search',
  templateUrl: 'contact-search.html'
})

export class contactSearch extends BasePage {

  clinicPatientsList: Observable<PatientResponse[]>;
  icon: any = "close";
  data: any;
  showList: boolean = false;
  title = "Search Patient";
  contacts: any = []
  clinicId = this.svcsCtrl.homeService.getItem('clinicId')

  constructor(protected navCtrl: NavController, protected navParams: NavParams, protected svcsCtrl: ApiProvider) {
    super(navCtrl, navParams, svcsCtrl);
    this.data = this.svcsCtrl.homeService.getItem('data');
  }

  ionViewWillEnter() {
    this.clinicPatientsList = this.svcsCtrl.clinicPatientService.list(this.clinicId);
  }

  refresh(refresher) {
    this.svcsCtrl.homeService.reload(this.clinicPatientsList, refresher);
  }
}