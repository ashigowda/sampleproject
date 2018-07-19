import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { ApiProvider, DeviceRegister } from 'mediserve-services';
import { BasePage } from '../../../../pages/base/BasePage';

@IonicPage()

@Component({
    selector: 'page-deviceregister',
    templateUrl: 'device-register.html'
})

export class deviceregister extends BasePage {

    input$: DeviceRegister;
   number: boolean;
    constructor(
          protected navCtrl: NavController,
        protected navParams: NavParams,
        protected svcsCtrl: ApiProvider
    ) {
        super(navCtrl, navParams, svcsCtrl);
        this.title = 'Register Phone';
        this.initialize()
    }

    initialize() {
        this.svcsCtrl.homeService.setItem('applicationScope', 'clinic');
        this.svcsCtrl.homeService.setItem('countryCode', '0091');
        this.input$ = {
            applicationScope: this.svcsCtrl.homeService.getItem('applicationScope'),
            countryCode: this.svcsCtrl.homeService.getItem('countryCode'),
            phone: this.svcsCtrl.homeService.getItem('phone')
        };
    }

    next() {
        this.registerDevice();
    }

    registerDevice() {
        this.message = "Registering device";
        if(this.input$.phone == null){
            this.number = true;
        }
        this.svcsCtrl.homeService.setItem('phone', this.input$.phone);

        console.log(this.input$)

        this.svcsCtrl.authDeviceService.register(this.input$).subscribe((response) => {
            console.log("in device register" + JSON.stringify(response))
            this.gotoDeviceVerify();
        }, (err) => {
            if (err.status == 0 || err.status == 400) {
               // this.gotoError(err, "deviceregister");
               this.number = true;
            } else if (err.status == 401) {
                this.gotoError(err,"deviceregister")
               // this.gotoDeviceVerify();
            }
        })
    }

}