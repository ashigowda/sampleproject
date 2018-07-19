import { Component } from '@angular/core';

import { NavController, IonicPage } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { ApiProvider } from 'mediserve-services';
import { BasePage } from '../../../../pages/base/BasePage';


@IonicPage()
@Component({
    selector: 'page-signout',
    templateUrl: 'signout.html'
})
export class signout extends BasePage {
    
    subTitle;
    status: number = 0;

    constructor(
          protected navCtrl: NavController,
        protected navParams: NavParams,
        protected svcsCtrl: ApiProvider
    ) {
        super(navCtrl, navParams, svcsCtrl);

        this.title = 'Sign out';
        this.subTitle = "Logged out successfully"
        this.message = "Please click on Login button to relogin!";

        this.response = this.navParams.get("message");
        let status = this.navParams.get("status");
        this.status = status ? status : 0;
    }

    ionViewDidEnter() {
        //this.menuCtrl.enable(false);
    }

    ionViewDidLoad() {
            // (this.svcsCtrl.signinService.logout()).success((data) => {
        //     console.log(data);
        //     this.response = data.message;
        //     //this.navCtrl.push('signout')
        //     window.open("/#/signout", '_self');
        // }).failure((data) => {
        //     this.response = "ERROR(remote): "
        //     this.response += data.error.message ? data.error.message : data.message;
        // });
    }

    next() {
        this.navCtrl.setRoot('devicecheck');
    }

}
