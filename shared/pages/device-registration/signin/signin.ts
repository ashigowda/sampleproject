import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { ApiProvider, DeviceProfileValidate, DeviceSignin } from 'mediserve-services';
import { BasePage } from '../../../../pages/base/BasePage';

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html'
})

export class signin extends BasePage {

  title = "Login with Pin"
  create = "Enter your 4-digit Pin"

  isActive: any;
  pinStage: number = 1;
  pinRepeat: string = "";
  tPin: string = "";

  pinConfirmed: boolean = true;

  error: boolean;
  matrix = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9']];
  profile: DeviceProfileValidate;
  constructor(
    protected navCtrl: NavController,
    protected navParams: NavParams,
    protected svcsCtrl: ApiProvider
  ) {
    super(navCtrl, navParams, svcsCtrl);

    this.response = this.navParams.get("message");
  }

  ionViewWillEnter() {
    this.message = "Resetting session";
    localStorage.setItem("isLoggedIn", "false");
    localStorage.removeItem("access_token");
  }

  clicked(event) {
    if (event.srcElement.id == 'iback' || event.srcElement.id == "back") {
      this.tPin = this.tPin.slice(0, -1);
    } else {
      if (this.tPin.length < 4)
        this.tPin += event.srcElement.id;
    }

    this.pinRepeat = this.tPin;
    this.pinConfirmed = true;
  }


  confirmPin() {
    console.log("Pin confirmed: " + this.pinRepeat)
    if (this.pinConfirmed) {

      let input: DeviceSignin = {
        applicationScope: this.svcsCtrl.homeService.getItem("applicationScope"),
        deviceToken: this.svcsCtrl.homeService.getItem("deviceToken"),
        username: this.svcsCtrl.homeService.getItem("username"),
        pin: this.pinRepeat
      }
      this.svcsCtrl.authSignService.login(input).subscribe((response) => {
        console.log("response is" + JSON.stringify(response))
        this.gotoHome()
      }, (err) => {
        if (err.status == 0 || err.status == 400) {
          this.error = true;
        } else if (err.status == 401) {
          this.gotoSignin();
        }
      })
    } else {
      this.error = true;
      console.log("Pin not confirmed");
    }

  }

  retry(){
    this.navCtrl.setRoot('profileVerifyStep1')
  }

}