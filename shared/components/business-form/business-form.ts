import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ClinicTemplate } from 'mediserve-services/lib';

@Component({
    selector: 'business-form',
    templateUrl: 'business-form.html'
})

export class BusinessForm {

    @Input('business') business: ClinicTemplate;

    constructor(protected navCtrl: NavController) {

    }

}