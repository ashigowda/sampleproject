import { Component, Input } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
// import { Profile } from 'mediserve-services';

@Component({
  selector: 'call-contact',
  templateUrl: 'call-contact.html'
})

export class CallContact {

  @Input('phone') phone: string;
  @Input('small') small: string;

  constructor(  protected navCtrl: NavController,
    public alertCtrl: AlertController,
    private callNumber: CallNumber
  ) {

  }

  async callPhone() {
    this.callNumber.callNumber(this.phone, true)
      .then(res => this.showAlert('Launched dialer!', res))
      .catch(err => this.showAlert('Error launching dialer', err));
  }

  showAlert(message: string, event: any) {
    let alert = this.alertCtrl.create({
      title: 'Alert',
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }


}