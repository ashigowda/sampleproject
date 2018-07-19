import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { ApiProvider, DeviceVerify } from 'mediserve-services';
import { BasePage } from '../../../../pages/base/BasePage';

@IonicPage()

@Component({
    selector: 'page-devicecheck',
    templateUrl: 'device-check.html'
})

export class devicecheck extends BasePage {

    input$: DeviceVerify;

    constructor(
          protected navCtrl: NavController,
        protected navParams: NavParams,
        protected svcsCtrl: ApiProvider
    ) {
        super(navCtrl, navParams, svcsCtrl);
        this.title = 'Device Check';
        this.message = "Initiating";
    }

    ionViewDidLoad() {
        this.initialize()
    }

    ionViewWillEnter() {
        this.verifyDevice();
    }

    initialize() {
        this.message = "Resetting session";
        localStorage.setItem("isLoggedIn", "false");
        localStorage.removeItem("access_token");
        this.input$ = {
            applicationScope: this.svcsCtrl.homeService.getItem('applicationScope'),
            countryCode: this.svcsCtrl.homeService.getItem('countryCode'),
            phone: this.svcsCtrl.homeService.getItem('phone'),
            device: {},
            deviceToken: this.svcsCtrl.homeService.getItem('deviceToken')
        }
    }

    verifyDevice() {
        this.message = "Verifying Device";
        if (this.input$.deviceToken == null || this.input$.deviceToken == undefined || this.input$.phone == null || this.input$.phone == undefined ||
             this.input$.applicationScope == null || this.input$.applicationScope == undefined) {
            this.gotoDeviceRegister();
        } else {
            this.svcsCtrl.authDeviceService.verify(this.input$).subscribe((response) => {
                console.log("in device check" + JSON.stringify(response))
                this.gotoSignin();
            }, (error) => {
                if (error.status == 401)
                    this.gotoProfileVerifyStep1();
                else
                    this.gotoError(error, "devicecheck");
            });
        }
    }

    gotoRegister() {
        this.gotoDeviceRegister();
    }

}
