import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()

@Component({
  selector: 'page-invoices',
  templateUrl: 'invoices.html'
})

export class invoices {

  title: any = "Medi Clinic"
  icon: any = "medkit"
  text: any;

  constructor(protected navCtrl: NavController) {
    this.text = "INVOICED";
  }

  gotoInvoiceDetails() {
    this.navCtrl.push('invoiceDetails')
  }

}
