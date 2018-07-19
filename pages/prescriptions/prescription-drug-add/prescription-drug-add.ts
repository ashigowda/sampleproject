import { Component } from '@angular/core';
import { NavController, ViewController, NavParams, IonicPage } from 'ionic-angular';
import { ApiProvider, PrescriptionItem } from 'mediserve-services/lib';
import { BasePage } from '../../base/BasePage';

@IonicPage()

@Component({
    selector: 'page-prescription-drug-add',
    templateUrl: 'prescription-drug-add.html'
})

export class prescriptionDrugAdd extends BasePage {

   
    prescriptionItems: any = [];
    prescriptionItem: PrescriptionItem = {};
    medicine = [];
    add: any;
    list: any;
    icon = 'close'
    title = "Add Drug";
    
    initializer() {
        this.list = ['Dolo-650', 'Imol-10', 'Imol-20', 'Coldact', 'telday-20h', 'Syphen']
    }

    constructor(  protected navCtrl: NavController,
        public view: ViewController,
        public navParam: NavParams,
        protected svcsCtrl: ApiProvider) {
        super(navCtrl, navParam, svcsCtrl);
        this.add = this.navParam.get('add');
    }

    addItem(){
      this.svcsCtrl.homeService.setItem("prescriptionItem",this.prescriptionItem);
      console.log(JSON.stringify(this.prescriptionItem))
      let prescriptionItem = this.svcsCtrl.homeService.getItem('prescriptionItem');
      if (prescriptionItem != null || prescriptionItem != undefined) {
        this.prescriptionItem = prescriptionItem;
    }
    let prescriptionItems = this.svcsCtrl.homeService.getItem('prescriptionItems');
    if (prescriptionItems != null || prescriptionItems != undefined) {
        this.prescriptionItems = prescriptionItems;
    }
    this.prescriptionItems = this.prescriptionItems || [];
    this.prescriptionItems.push(this.prescriptionItem);
    this.svcsCtrl.homeService.setItem("prescriptionItems",this.prescriptionItems);
    console.log(JSON.stringify(this.prescriptionItems))
    this.navCtrl.push('prescriptionAddStep1')
    }

    ionViewWillEnter() {
        this.view.showBackButton(false);
    }

  
    
}