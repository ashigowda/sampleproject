import { Component, Input} from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserTemplate } from 'mediserve-services/lib';

@Component({
    selector: 'contact-verification-form',
    templateUrl: 'contact-verification-form.html'
})

export class ContactVerificationForm {
    @Input('patient') patient:UserTemplate;
    constructor(protected navCtrl: NavController) {

    }
}