import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

@IonicPage({
  defaultHistory: ['appointmentDetails']
})
@Component({
  selector: 'page-invoice-add',
  templateUrl: 'invoice-add.html'
})

export class invoiceAdd {

  title = "Invoice";
  
  constructor(  protected navCtrl: NavController, public param: NavParams) {

  }

}
