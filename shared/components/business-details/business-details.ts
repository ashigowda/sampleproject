import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ClinicTemplate } from 'mediserve-services';

@Component({
    selector: 'business-details',
    templateUrl: 'business-details.html'
})

export class BusinessDetails {

    @Input('business') business: ClinicTemplate;
    @Input('center') center:any;
    
    constructor(protected navCtrl: NavController) {

    }

}