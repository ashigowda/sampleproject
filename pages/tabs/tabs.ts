import { Component } from '@angular/core';
import { NavParams, NavController, IonicPage } from 'ionic-angular';
@IonicPage( {segment: 'main'})
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class tabs {

  [x: string]: any;
  activeTab: any;
  tab1Root: any = 'home';
  tab2Root: any = 'patientList';
  tab3Root: any = 'appointmentList';
  tab4Root: any = 'prescriptionList'
  tab5Root: any = 'accountManagement'
  constructor(public params: NavParams, public nav: NavController) {
    this.activeTab = this.params.get('tabIndex');
    this.name = this.params.data;
  }

}