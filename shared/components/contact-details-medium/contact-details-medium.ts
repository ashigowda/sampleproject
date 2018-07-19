import { Component, Input } from '@angular/core';
import { NavController,NavParams, } from 'ionic-angular';
import { AppointmentResponse } from 'mediserve-services/lib';
// import { ApiProvider, ClinicAppointment, ClinicPatient, BusinessUser } from 'mediserve-services/lib';

@Component({
    selector: 'contact-details-medium',
    templateUrl: 'contact-details-medium.html'
})

export class ContactDetailsMediumPage{

    @Input('appointment') appointment: AppointmentResponse;

    constructor(  protected navCtrl: NavController,public navParams:NavParams) {
     
    }

}