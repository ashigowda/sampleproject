import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserTemplate } from 'mediserve-services';

@Component({
    selector: 'profile-form',
    templateUrl: 'profile-form.html'
})

export class ProfileForm {

    @Input('profile') profile: UserTemplate;
    @Input('center') center:any;
    
    constructor(protected navCtrl: NavController) {

    }

}