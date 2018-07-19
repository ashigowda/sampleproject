import { Component, Input } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { PrescriptionItem } from 'mediserve-services/lib';

@Component({
    selector: 'prescription-drug-form',
    templateUrl: 'prescription-drug-form.html'
})

export class PrescriptonDrugForm {

    initializer: any;
    showList: boolean;
    show: boolean;

    @Input('list') list: any;
    @Input('prescriptionItem') prescriptionItem: PrescriptionItem;
    @Input('add') add: any;
    @Input('frequent') frequent: any;
    @Input('frequent1') frequent1: any;
    @Input('searchDrug') searchDrug: any;

    constructor(  protected navCtrl: NavController, public view: ViewController) {
    }

    getDrug(searchbar) {
        let val = searchbar.target.value;
        if (val && val.trim() != '') {
            this.showList = true;
            this.frequent = true;
            // this.drug = this.drug.filter((order) => {
            //     return (order.toLowerCase().indexOf(val.toLowerCase()) > -1)
            // });
        }
        else {
            return false;
        }
    }

    onClear(ev) {
        this.show = false;
        this.showList = true;
        this.frequent = true;
        // this.frequent1 = true;
    }

    notify(morningDose){
        alert(morningDose)
    }
    
    selectDrug(item) {
        this.show = true;
        // this.drug.drugName =item;
        this.searchDrug = item;
        this.showList = false;
        this.frequent = false;
        // this.frequent1 = false;
    }

}