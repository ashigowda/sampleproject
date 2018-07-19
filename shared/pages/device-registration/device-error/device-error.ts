import { Component } from '@angular/core';
import { NavController, IonicPage, App } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { ApiProvider } from 'mediserve-services';
import { RegistrationBase } from '../../../../pages/base';


@IonicPage()

@Component({
    selector: 'page-deviceerror',
    templateUrl: 'device-error.html'
})

export class deviceerror extends RegistrationBase {

    subTitle;
    status: number = 0;
    error: any = {};
    source: string// = "devicecheck"

    constructor(
          protected navCtrl: NavController,
        protected navParams: NavParams,
        protected svcsCtrl: ApiProvider,
        public app:App
    ) {
        super(navCtrl, navParams, svcsCtrl);

        this.title = 'Medi Serve';
        this.subTitle = "Network Error occoured"
        this.message = "Please retry after sometime!";
        this.response = this.navParams.get("message");
        let status = this.navParams.get("status");
     
        this.status = status ? status : 0;
        this.error = this.navParams.get("error");
        this.source = this.navParams.get("source");
        this.response = JSON.stringify(this.error, null, 4);
        if (this.source == null || this.source == '' || this.source == undefined) {
           
            this.source = "devicecheck";
        }
    }

    retry() {
        console.log("sourse is"+this.source)
        console.log("error message is"+JSON.stringify(this.error));
        // this.app.navPop();
        // this.navCtrl.pop();
        this.navCtrl.setRoot(this.source)
    }


}
