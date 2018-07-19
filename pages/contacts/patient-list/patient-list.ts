import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams, LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { ApiProvider, ClinicResponse, UserTemplate, PatientResponse, } from 'mediserve-services/lib';
import { BasePage } from '../../base/BasePage';
import { Observable } from 'rxjs';



@IonicPage({
    segment: 'patient-list'
})

@Component({
    selector: 'page-patient-list',
    templateUrl: 'patient-list.html'
})

export class patientList extends BasePage {

    patients: Observable<PatientResponse[]>;
    profile: Observable<UserTemplate>;
    business: Observable<ClinicResponse>;
    searchTerm: string;
    patientList: any = [];
    start: number = 7;


    constructor(protected navCtrl: NavController,
        protected navParams: NavParams,
        protected svcsCtrl: ApiProvider, public loadingController: LoadingController
    ) {
        super(navCtrl, navParams, svcsCtrl)
        this.title = "Patients";
        let clinicId = this.svcsCtrl.homeService.getItem('clinicId');
        this.profile = this.svcsCtrl.profileService.read();
        this.business = this.svcsCtrl.clinicBusinessService.read(clinicId)
        this.patients = this.svcsCtrl.clinicPatientService.list(clinicId)
    }

    doInfinite(infiniteScroll: any) {
        console.log('doInfinite, start is currently ' + this.start);
        this.start += 2;
        infiniteScroll.complete();
    }

    refresh(refresher) {
        this.svcsCtrl.homeService.reload(this.patients, refresher);
    }

    memberSearch() {
        this.navCtrl.push('searchMember')
    }

    editPatient(clinicPatientId) {
        this.navCtrl.push('patientEdit', { clinicPatientId })
    }

    setItems() {
        this.patients = this.patients;
    }

    viewPatient(id: string) {
        this.svcsCtrl.homeService.setItem('PatientId',id);
        this.navCtrl.push('patientInformation', { clinicPatientId: id })
    }

    // getItems(ev): Observable<PatientResponse[]> {
    //     let val = ev.target.value;
    //     return this.patients = this.svcsCtrl.clinicPatientService.list(this.svcsCtrl.homeService.getItem('clinicId'))
    //         .map(patients => patients.filter(patient => (patient.member.phone.toLowerCase().indexOf(val.toLowerCase()) > -1) ||
    //             (patient.member.firstName.toLowerCase().indexOf(val.toLowerCase()) > -1)))
    // }

    bookAppointment(clinicPatientId) {
        this.navCtrl.push('appointmentAddStep1', { clinicPatientId })
    }

    writePrescription(clinicPatientId) {
        this.navCtrl.push('appointmentSelect', { clinicPatientId })
    }

}