import {  Input, Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'contact-patient-form',
    templateUrl: 'contact-patient-form.html'
})

export class contactPatientForm {

    @Input('patient') patient: any;
    constructor(protected navCtrl: NavController) {

    }

}