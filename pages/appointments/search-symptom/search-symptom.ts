import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage, ViewController } from 'ionic-angular';
import { ApiProvider, Symtom } from 'mediserve-services/lib';
import { BasePage } from '../../base/BasePage';
import { Observable } from 'rxjs/Observable';

@IonicPage({
})

@Component({
    selector: 'page-search-symptom',
    templateUrl: 'search-symptom.html'
})

export class searchSymptom extends BasePage {
    
    symptomsList: Observable<Symtom[]>;
    appointment: any;
    symptom: any;

    constructor(protected navCtrl: NavController,
        protected navParams: NavParams,
        protected svcsCtrl: ApiProvider,
        public viewCtrl: ViewController) {
        super(navCtrl, navParams, svcsCtrl);
        this.title = "Add Symptoms";
        this.appointment = this.navParams.get('appointment')
    }

    ionViewWillEnter() {
        this.symptomsList = this.svcsCtrl.listofvaluesUtilService.listSymtoms()//.subscribe((response) =>{
        //     console.log('response is'+JSON.stringify(response))
        // })

    }

    dismiss() {
        this.viewCtrl.dismiss();

    }
    removeSymptom(index) {
        this.appointment.symtoms.splice(index, 1)
    }

    getItems(): Observable<Symtom[]> {
        return this.symptomsList = this.svcsCtrl.listofvaluesUtilService.listSymtoms()
            .map(symptomsList => symptomsList.filter(symptomsample => (symptomsample.symtom.toLowerCase().indexOf(this.symptom.toLowerCase()) > -1)))
    }

    addThisSymptom(symptom) {
        this.symptom = symptom;
        this.appointment.symtoms.push(this.symptom)
        this.symptom = null;
        // return this.symptomsList = this.svcsCtrl.listofvaluesUtilService.listSymtoms()
        //     .filter(symptomsample => this.symptomsList.splice(indexOf(symptomsample,1)))


    }

}