import { Component } from '@angular/core';
import { NavParams, NavController, IonicPage } from 'ionic-angular';
import { ApiProvider, ClinicResponse } from "mediserve-services";
import { BasePage } from '../../base/BasePage';
import { Observable } from 'rxjs/Observable';

@IonicPage({
  defaultHistory: ['businessManagement']
})

@Component({
  selector: 'page-clinic-settings',
  templateUrl: 'clinic-settings.html'
})

export class clinicSettings extends BasePage {

  business: Observable<ClinicResponse>;

  constructor(public navParams: NavParams,
    protected navCtrl: NavController,
    protected svcsCtrl: ApiProvider
  ) {
    super(navCtrl, navParams, svcsCtrl);
    this.title = "Business Details";
  }

  ionViewDidLoad() {
  let clinicId = this.svcsCtrl.homeService.getItem('clinicId')
    this.business = this.svcsCtrl.clinicBusinessService.read(clinicId)
  }

  edit() {
    this.navCtrl.push("clinicSettingsEdit")
  }

}