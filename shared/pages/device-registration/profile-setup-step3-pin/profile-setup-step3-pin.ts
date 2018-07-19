import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { ApiProvider, DeviceProfileSignup } from 'mediserve-services';
import { BasePage } from '../../../../pages/base/BasePage';

@IonicPage()

@Component({
  selector: 'page-profile-setup-step3-pin',
  templateUrl: 'profile-setup-step3-pin.html'
})

export class profileSetupStep3Pin extends BasePage {


  profile: any;
  rtitle = "Repeat Pin"
  create = "Enter 4-digit Pin"

  pinStage: number = 0;
  pin: string = "";
  pinRepeat: string = "";
  tPin: string;
  pinConfirmed: boolean = false;
  isActive: any;
  input: DeviceProfileSignup;

  error: boolean;
  matrix = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9']];

  constructor(
    protected navCtrl: NavController,
    protected navParams: NavParams,
    protected svcsCtrl: ApiProvider
  ) {
    super(navCtrl, navParams, svcsCtrl);
    this.title = "Setup Pin";
    this.tPin = this.pin;
  }

  ionViewDidEnter() {
    this.profile = this.svcsCtrl.profileService.getItem('profile')
    //this.menu.enable(false);
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
      this.profile.pin = this.pinRepeat;
      this.input = {
        applicationScope: this.svcsCtrl.homeService.getItem('applicationScope'),
        countryCode: this.svcsCtrl.homeService.getItem('countryCode'),
        phone: this.svcsCtrl.homeService.getItem('phone'),
        device: {},
        deviceToken: this.svcsCtrl.homeService.getItem('deviceToken'),
        profile: this.profile
      }

      this.svcsCtrl.authProfileService.signup(this.input).subscribe((data) => {
        console.log(data);
        this.svcsCtrl.authProfileService.removeItem(this.profile)
        // this.svcsCtrl.signinService.removeProfile();
        console.log("Navigating to Signin")
        this.gotoSignin();
      })
    }
    else {
      console.log("Pin not confirmed");
    }
  }

}