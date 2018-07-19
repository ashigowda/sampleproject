import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { Http } from "@angular/http";
import { ApiProvider, PatientResponse } from 'mediserve-services/lib';
import { BasePage } from '../../base/BasePage';
import { Observable } from 'rxjs/Observable';

@IonicPage({
  segment: ':clinicId/appointments/appointment-add-contact-search',
  defaultHistory: ['appointmentList']
})

@Component({
  selector: 'page-appointment-add-contact-search',
  templateUrl: 'appointment-add-contact-search.html'
})

export class appointmentAddcontactSearch extends BasePage {

  clinicPatientsList: Observable<PatientResponse[]>;
  data: any;
  title = "Search Patient";
  clinicId = this.svcsCtrl.homeService.getItem('clinicId');

  constructor(protected navCtrl: NavController, protected navParams: NavParams, public http: Http, protected svcsCtrl: ApiProvider) {
    super(navCtrl, navParams, svcsCtrl)
    this.data = this.svcsCtrl.homeService.getItem('data')
  }

  ionViewWillEnter() {
    this.clinicPatientsList = this.svcsCtrl.clinicPatientService.list(this.clinicId)
  }

}