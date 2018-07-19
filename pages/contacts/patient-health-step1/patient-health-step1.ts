import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage, ModalController } from 'ionic-angular';
import { ApiProvider, ClinicPatientHealthrecordService, HealthResponse, HealthCondition } from 'mediserve-services/lib';
import { BasePage } from '../../base/BasePage';

@IonicPage({
    segment: 'patient-health-step1/:clinicPatientId'
})

@Component({
    selector: 'page-patient-health-step1',
    templateUrl: 'patient-health-step1.html'
})

export class patientHealthStep1 extends BasePage {

    patientHealth: HealthResponse[];
    healthId: any;
    clinicPatientId: any;
    input: ClinicPatientHealthrecordService.ListByPatientParams;

    details: HealthCondition[] = [
        {
            status: 'string',
            key: 'Work',
            from: '',
            to: '',
            notes: ''
        },
        {
            key: 'Smoking',
            from: '',
            to: '',
            status: 'string',
            notes: ''

        },
        {
            key: 'Alcohol',
            from: '',
            to: '',
            status: 'string',
            notes: ''
        },
        {
            key: 'Snoring',
            from: '',
            to: '',
            status: 'string',
            notes: ''
        },
        {
            key: 'Living In',
            from: '',
            to: '',
            status: 'string',
            notes: ''
        },
    ];

    constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public svcsCtrl: ApiProvider) {
        super(navCtrl, navParams, svcsCtrl);
        this.title = "Patient Health Add";
        this.clinicPatientId = this.navParams.get('clinicPatientId')
        this.healthId = this.navParams.get('healthId')
        this.input = {
            patientId: this.clinicPatientId,
            clinicId: this.svcsCtrl.homeService.getItem('clinicId')
        }

        //listing patient health and removing the standared ones
        this.svcsCtrl.clinicPatientHealthrecordService.listByPatient(this.input).subscribe((response) => {
            this.patientHealth = response;

            if (this.patientHealth[0] != undefined) {
                for (let x in this.patientHealth[0].conditions) {
                    let prescription = this.details.find(record => record.key === this.patientHealth[0].conditions[x].key);
                    let index = this.details.indexOf(prescription);
                    if (index !== -1) {
                        this.details[index] = this.patientHealth[0].conditions[x];
                    }
                }
            }
        })
    }

    gotoNextPage() {
        if (this.healthId) {
            this.navCtrl.push('patientHealthStep2', { clinicPatientId: this.clinicPatientId, healthId: this.healthId })
        }
        else {
            this.navCtrl.push('patientHealthStep2', { clinicPatientId: this.clinicPatientId })
        }
    }

    gotoEditPage(key) {
        let contactModal = this.modalCtrl.create('patientHealthEdit', { key });
        contactModal.present();
    }
}