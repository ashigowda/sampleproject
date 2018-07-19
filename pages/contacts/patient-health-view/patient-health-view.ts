import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams, ModalController } from 'ionic-angular';
import { ApiProvider, ClinicPatientHealthrecordService, HealthResponse, HealthCondition } from 'mediserve-services/lib';
import { BasePage } from '../../base/BasePage';

@IonicPage({
    segment: 'patient-health-view/:clinicPatientId',
    defaultHistory: ['patientInformation']
})

@Component({
    selector: 'page-patient-health-view',
    templateUrl: 'patient-health-view.html'
})

export class patientHealthView extends BasePage {

    patientHealth: HealthResponse[];
    input: ClinicPatientHealthrecordService.ListByPatientParams;
    clinicPatientId: any;
    healthId: any;
    tabIndex: any;
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
        {
            status: 'string',
            key: 'Hypertension',
            from: "",
            to: "",
            notes: ''
        },
        {
            status: 'string',
            key: 'IHD Disorder',
            from: "",
            to: "",
            notes: ''
        },
        {
            status: 'string',
            key: 'CKD',
            from: "",
            to: "",
            notes: ''
        },
        {
            status: 'string',
            key: 'Liver Disorder',
            from: "",
            to: "",
            notes: ''
        },
        {
            status: 'string',
            key: 'Thyroid Disorder',
            from: "",
            to: "",
            notes: ''
        },
        {
            status: 'string',
            key: 'Others',
            from: "",
            to: "",
            notes: ''
        },
        {
            status: 'string',
            key: 'Tuberculosis',
            from: "",
            to: "",
            notes: ''
        },
        {
            status: 'string',
            key: 'COPD',
            from: "",
            to: "",
            notes: ''
        },
        {
            status: 'string',
            key: 'Asthma',
            from: "",
            to: "",
            notes: ''
        },
        {
            status: 'string',
            key: 'ILD',
            from: "",
            to: "",
            notes: ''
        },
        {
            status: 'string',
            key: 'Cardio Thoracis Surgery',
            from: "",
            to: "",
            notes: ''
        },
        {
            status: 'string',
            key: 'Other History',
            from: "",
            to: "",
            notes: ''
        }
    ];

    constructor(protected navCtrl: NavController, protected navParams: NavParams, protected svcsCtrl: ApiProvider, public modalCtrl: ModalController) {
        super(navCtrl, navParams, svcsCtrl);
        this.clinicPatientId = this.navParams.get('clinicPatientId');
        this.title = "Patient Health"
        this.tabIndex = "0";
        this.input = {
            patientId: this.navParams.get('clinicPatientId'),
            clinicId: this.svcsCtrl.homeService.getItem('clinicId')
        }
        this.svcsCtrl.clinicPatientHealthrecordService.listByPatient(this.input).subscribe((response) => {
            this.patientHealth = response;
            console.log('patient health is respibsd' + JSON.stringify(response.length))
            if (response.length != 0) {
                this.healthId = response[0]._id;

            }
            console.log('patient health id' + JSON.stringify(this.healthId))

            console.log('patient health is' + JSON.stringify(this.patientHealth))

            if (this.patientHealth[0] != undefined) {
                this.healthRecords = this.svcsCtrl.clinicPatientHealthrecordService.setItem('healthRecords', this.patientHealth[0].conditions)
                for (let x in this.patientHealth[0].conditions) {
                    let prescription = this.details.find(record => record.key === this.patientHealth[0].conditions[x].key);
                    let index = this.details.indexOf(prescription);
                    if (index !== -1) {
                        this.details[index] = this.patientHealth[0].conditions[x];
                    }
                }
            }
            console.log('patient health in details' + JSON.stringify(this.details))
        })
    }

    ionViewWillEnter() {
    }

    gotoUpdatePage(healthId) {
        this.navCtrl.push('patientHealthStep1', { healthId, clinicPatientId: this.clinicPatientId })
    }

    gotoaddPatientHealth() {
        this.svcsCtrl.clinicPatientHealthrecordService.setItem('healthRecords', null)
        this.navCtrl.push('patientHealthStep1', { clinicPatientId: this.clinicPatientId })
    }

}