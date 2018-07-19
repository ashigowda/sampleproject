import { Component } from '@angular/core';

import { NavController, IonicPage,AlertController } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { ApiProvider, DeviceProfileValidate } from 'mediserve-services';
import { BasePage } from '../../../../pages/base/BasePage';


@IonicPage()

@Component({
  selector: 'page-profile-verify-step2-pin',
  templateUrl: 'profile-verify-step2-pin.html'
})

export class profileVerifyStep2Pin extends BasePage {

  rtitle = "Repeat Pin"
  create = "Enter 4-digit Pin"
  isActive: any;
  pinStage: number = 0;
  pin: string = "";
  pinRepeat: string = "";
  tPin: string;
  pinConfirmed: boolean = false;
  deviceProfileValidate: DeviceProfileValidate;
  error: boolean;
  matrix = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9']];

  constructor(
    protected navCtrl: NavController,
    protected navParams: NavParams,
    protected svcsCtrl: ApiProvider,
    protected alertCtrl: AlertController
  ) {
    super(navCtrl, navParams, svcsCtrl);
    this.title = "Setup Pin";
    this.tPin = this.pin;
  }

  ionViewDidEnter() {
  }

  clicked(event) {
    if (event.srcElement.id == 'iback' || event.srcElement.id == "back") {
      if (this.pinStage == 1 && this.pinRepeat.length == 0) {
        this.pinStage = 0;
        this.tPin = this.pin;
      } else {
        this.tPin = this.tPin.slice(0, -1);
      }
    } else {
      if (this.tPin.length < 4)
        this.tPin += event.srcElement.id;
    }
    if (this.pinStage == 0) {
      this.pin = this.tPin;
    } else {
      this.pinRepeat = this.tPin;
    }
    if (this.pin == this.pinRepeat) {
      this.pinConfirmed = true;
    } else {
      this.pinConfirmed = false;
    }
  }

  repeatPin() {
    this.pinStage = 1;
    this.tPin = this.pinRepeat;
  }

 
  confirmPin() {

    console.log("Pin confirmed: " + this.pinRepeat)
    
    if (this.pinConfirmed) {
      this.message = "Confirming device";
      this.deviceProfileValidate = {
        applicationScope: this.svcsCtrl.homeService.getItem('applicationScope'),
        countryCode: this.svcsCtrl.homeService.getItem('countryCode'),
        phone: this.svcsCtrl.homeService.getItem('phone'),
        device: {},
        deviceToken: this.svcsCtrl.homeService.getItem('deviceToken'),
        email: this.svcsCtrl.homeService.getItem('email'),
        dateOfBirth: this.svcsCtrl.homeService.getItem('dateOfBirth'),
        gender: this.svcsCtrl.homeService.getItem('gender'),
        pin: this.pinRepeat
      }

      this.svcsCtrl.authProfileService.validate(this.deviceProfileValidate).subscribe((response) => {
        console.log("response is" + JSON.stringify(response));
 
          let alert = this.alertCtrl.create({
            title: 'Pin setting is done',
            subTitle: 'Please login',
            buttons: [
              {
                text: 'OK',
                role: 'Ok',
                handler: () => {
                  this.gotoSignin();
                },
              }
            ],
          });
          alert.present();

      }, 
   
      (err) => {
       
        if (err.status == 0 || err.status == 400) {
          this.error = true;
       // this.gotoError(err, "profileVerifyStep2Pin");
        }
      }
    )
    } else {
      console.log("Pin not confirmed");
    }

  }

  retry(){
    this.navCtrl.setRoot('profileVerifyStep1');
  }

}