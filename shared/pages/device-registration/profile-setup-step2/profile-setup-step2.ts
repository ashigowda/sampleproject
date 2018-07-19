import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { ApiProvider, UserTemplate } from 'mediserve-services';
import { BasePage } from '../../../../pages/base/BasePage';

@IonicPage()

@Component({
    selector: 'page-profile-setup-step2',
    templateUrl: 'profile-setup-step2.html'
})

export class profilesetupStep2 extends BasePage {
    profile: UserTemplate = {
        firstName: "",
        lastName: "",
        email: "",
        pin: "",
        dateOfBirth: "",
        gender: "string",
        address: {
            addressName: '',
            primary: true,
            address: '',
            area: '',
            city: '',
            state: '',
            country: '',
            pincode: ''
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
        // this.userTemplate = new UserTemplate();
    }
    
    ionViewDidLoad() {
      let profile= this.svcsCtrl.profileService.getItem('profile')
       console.log("clinic" + JSON.stringify(profile))
       if (profile != null) {
           this.profile = profile;
       }
    }

    next() {
        this.profile = this.profile;
        this.svcsCtrl.profileService.setItem('profile',this.profile)
            this.navCtrl.push('profileSetupStep3Pin');
       

        // this.setProfile();
    }
    

  

}
