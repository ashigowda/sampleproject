import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage({
    segment: 'history/history-management'
})

@Component({
    selector: 'page-history-management',
    templateUrl: 'history-management.html'
})

export class historyManagement {

    title = "History"

    navList: any = [
        {
            order: 'Appointment History',
            page: 'appointmentHistory',
            icon: 'albums'
        },
        {
            order: 'Prescription History',
            page: 'prescriptionHistory',
            icon: 'browsers'
        }
    ]

    constructor(protected navCtrl: NavController) {

    }

    gotoPage(page) {
        this.navCtrl.push(page)
    }

}