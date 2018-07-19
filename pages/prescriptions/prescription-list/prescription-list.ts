import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams, ModalController } from 'ionic-angular';
import { ApiProvider, ClinicResponse, UserTemplate, PrescriptionResponse } from 'mediserve-services/lib';
import { BasePage } from '../../base/BasePage';
import { Observable } from 'rxjs/Observable';



@IonicPage({
    segment: 'prescription-list'
})

@Component({
    selector: 'page-prescription-list',
    templateUrl: 'prescription-list.html'
})

export class prescriptionList extends BasePage {

    prescriptions: Observable<PrescriptionResponse[]>;
    loading: boolean = false;
    profile: Observable<UserTemplate>;
    business: Observable<ClinicResponse>;
    start: number = 7;
    clinicId = this.svcsCtrl.homeService.getItem('clinicId');

    constructor(
        protected navCtrl: NavController,
        protected navParams: NavParams,
        protected svcsCtrl: ApiProvider,
        public modalCtrl: ModalController

    ) {
        super(navCtrl, navParams, svcsCtrl);
        this.title = "Recent Prescriptions";
        this.profile = this.svcsCtrl.profileService.read();
        this.business = this.svcsCtrl.clinicBusinessService.read(this.clinicId)
        this.prescriptions = this.svcsCtrl.clinicPatientPrescriptionService.list(this.clinicId);
        this.prescriptions = this.prescriptions.map(appointment =>appointment.sort((a, b) => this.getDate(a.createdDate) > this.getDate(b.createdDate) ? -1 : 1));
    }

    getDate(date) {
        let date1 = new Date(date).toLocaleDateString();
        return date1;
    }

    openFilterModel() {
        const modal = this.modalCtrl.create('FilterModel');
        modal.present();
    }

    refresh(refresher) {
        this.svcsCtrl.homeService.reload(this.prescriptions, refresher);
    }

    viewprescription(prescriptionId) {
        this.svcsCtrl.homeService.setItem('prescriptionId', prescriptionId)
        this.navCtrl.push('prescriptionDetails',{prescriptionId})
    }

    writePrescription() {
        this.svcsCtrl.homeService.setItem('data', 'createPrescription')
        this.navCtrl.push('contactSearch')
    }

    // getItems(ev) {
    //     let val = ev.target.value;
    //     return this.prescriptions = this.svcsCtrl.clinicPatientPrescriptionService.list(this.svcsCtrl.homeService.getItem('clinicId'))
    //         .map(prescription => prescription.filter(prescription => (prescription.member.phone.toLowerCase().indexOf(val.toLowerCase()) > -1) ||
    //             (prescription.member.firstName.toLowerCase().indexOf(val.toLowerCase()) > -1)))
    // }

    doInfinite(infiniteScroll) {
        console.log('Begin async operation');
        this.start += 2;
        console.log('Async operation has ended');
        infiniteScroll.complete();
    }

}