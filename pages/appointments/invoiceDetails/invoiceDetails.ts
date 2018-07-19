import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage, AlertController } from 'ionic-angular';
import { ApiProvider } from 'mediserve-services/lib';

@IonicPage()
@Component({
  selector: 'page-invoiceDetails',
  templateUrl: 'invoiceDetails.html'
})

export class invoiceDetails{

  appointmentId: any;
  add: boolean = false;
  number: any;
  total: any;
  description: any = [];
  rate: any;
  details = [];
  i: any = [];
  title = "Invoice Details"

  constructor(  protected navCtrl: NavController, 
    protected navParams: NavParams,
     public alert: AlertController,
    protected svcsCtrl: ApiProvider) {
    // super(navCtrl, navParams, svcsCtrl);
    this.appointmentId = this.navParams.get('appointmentId')
    this.number = this.navParams.get('number');
    this.description = this.navParams.get('description');
    this.rate = this.navParams.get('rate')

  }

  addInvoice() {
    this.details.push({
      number: this.number,
      description: this.description,
      rate: this.rate
    })
  }

  saveinvoice() {
    let alert = this.alert.create({
      title: 'Confirm Invoice',
      message: 'Invoice has been created successfully',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            //console.log('Cancel clicked');
          }
        },
        {
          text: 'Ok',
          handler: () => {
            let appointmentId = this.appointmentId;
            this.navCtrl.push('appointmentDetails', { appointmentId })
          }
        }
      ]
    });
    alert.present();
  }

}