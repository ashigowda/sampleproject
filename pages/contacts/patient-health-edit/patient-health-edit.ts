import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, IonicPage } from 'ionic-angular';
import { ApiProvider, HealthCondition } from 'mediserve-services/lib';
import { BasePage } from '../../base/BasePage';

@IonicPage({
    segment: 'patient-health-edit',
    // defaultHistory: ['openinghours']
})

@Component({
    selector: 'page-patient-health-edit',
    templateUrl: 'patient-health-edit.html'
})

export class patientHealthEdit extends BasePage {

    healthRecord: HealthCondition;
    public isToggled: boolean;

    constructor(public navParams: NavParams,
          protected navCtrl: NavController,
        public view: ViewController, protected svcsCtrl: ApiProvider
    ) {
        super(navCtrl, navParams, svcsCtrl);
        this.healthRecord = this.navParams.get('key');
       this.title = 'Patient Health Edit';
    }

    update() {
        this.svcsCtrl.clinicPatientHealthrecordService.setItem('healthRecord', this.healthRecord);
        this.healthRecord = this.svcsCtrl.clinicPatientHealthrecordService.getItem('healthRecord')
        this.healthRecords = this.svcsCtrl.clinicPatientHealthrecordService.getItem('healthRecords');
        if(this.healthRecords == null){
            this.healthRecords = this.healthRecords || [];
        }
        let prescription = this.healthRecords.find(record => record.key === this.healthRecord.key);
        let index = this.healthRecords.indexOf(prescription);
        if (index !== -1) {
            this.healthRecords.splice(index, 1);
        }
        this.healthRecords.push(this.healthRecord);
        this.svcsCtrl.clinicPatientHealthrecordService.setItem('healthRecords', this.healthRecords)
        this.view.dismiss();
    }

    dismiss() {
        this.view.dismiss();
    }

}