import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'contact-confirmation-form',
    templateUrl: 'contact-confirmation-form.html'
})

export class ContactConfirmationForm {
    @Input('patient') patient: any;
    constructor(protected navCtrl: NavController) {

    }
    
}