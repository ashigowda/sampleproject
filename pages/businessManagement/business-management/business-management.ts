import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage({
    segment: 'business/business-management',
    defaultHistory: ['accountManagement']
})
@Component({
    selector: 'page-business-management',
    templateUrl: 'business-management.html'
})

export class businessManagement {

    title: any = "Business Management"

    navList: any = [
        {
            order: 'Clinic Settings',
            page: 'clinicSettings',
            icon: 'settings'
        },
        {
            order: 'Staff Management',
            page: 'StaffList',
            icon: 'person-add'
        },
        {
            order: 'Opening Hours',
            page: 'openingHoursList',
            icon: 'clock'
        }
    ]

    constructor(protected navCtrl: NavController) {

    }

}