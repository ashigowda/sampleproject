import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { ApiProvider, DeviceConfirm } from 'mediserve-services';
import { BasePage } from '../../../../pages/base/BasePage';

@IonicPage()

@Component({
    selector: 'page-deviceverify',
    templateUrl: 'device-verify.html'
})

export class deviceverify extends BasePage {

    input$: DeviceConfirm;
    otp: boolean = false;
    constructor(
          protected navCtrl: NavController,
        protected navParams: NavParams,
        protected svcsCtrl: ApiProvider
    ) {
        super(navCtrl, navParams, svcsCtrl);
        this.title = 'Verify Phone';
        this.initialize()
    }

    initialize() {
        this.input$ = {
            applicationScope: this.svcsCtrl.homeService.getItem('applicationScope'),
            countryCode: this.svcsCtrl.homeService.getItem('countryCode'),
            phone: this.svcsCtrl.homeService.getItem('phone'),
            otp: '',
            device: {},
        }
    }

    verifyDevice() {
        this.message = "Confirming device";

        this.input$.otp = this.input$.otp;
        if(this.input$.otp){

        this.svcsCtrl.authDeviceService.confirm(this.input$).subscribe((response) => {
            console.log("response is" + JSON.stringify(response))
            if (response.phoneStatus && response.phoneStatus == "unregistered") {
                this.gotoProfileSetupStep1();
            } else if (response.phoneStatus && response.phoneStatus == "registered") {

                this.gotoProfileVerifyStep1();
            }
        }, (err) => {
            if (err.status == 0 || err.status == 400) {
                this.otp = true;
            } 
            // else if (err.status == 200) {
            //     this.gotoSignin();
            // }
         })
        }
         else{
             this.otp = true;
             console.log("Not a valid OTP")
         }
    }


    back() {
        this.gotoDeviceRegister();
    }
}