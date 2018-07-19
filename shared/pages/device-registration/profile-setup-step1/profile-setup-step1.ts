import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { ApiProvider, UserTemplate,  } from 'mediserve-services';
import { BasePage } from '../../../../pages/base/BasePage';

@IonicPage()

@Component({
    selector: 'page-profile-setup-step1',
    templateUrl: 'profile-setup-step1.html'
})

export class profilesetupStep1 extends BasePage {
    
    business = 'business';
    profile: UserTemplate = {
        firstName: "",
        lastName: "",
        email: "",
        pin: "",
        dateOfBirth: "",
        gender: "string",
        address: {

        },
        notification: {
        }
    }

    constructor(
          protected navCtrl: NavController,
        protected navParams: NavParams,
        protected svcsCtrl: ApiProvider
    ) {
        super(navCtrl, navParams, svcsCtrl);
        this.title = 'Profile Setup';
    }

  
    next() {
     this.svcsCtrl.profileService.setItem('profile',this.profile)
         this.navCtrl.push('profilesetupStep2')
    
    }

}
