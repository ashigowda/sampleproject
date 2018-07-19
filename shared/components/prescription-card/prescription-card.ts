import { Component, Input } from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';
import { ApiProvider, PrescriptionItem } from 'mediserve-services/lib';

@Component({
    selector: 'prescription-card',
    templateUrl: 'prescription-card.html'
})

export class PrescriptonDetailsPage{

    @Input('prescriptionItem') prescriptionItem: PrescriptionItem;
    @Input('show') show: any;
    @Input('prescriptionId') prescriptionId: any;
    @Input('appointmentId') appointmentId: any;
    @Input('show1') show1: any;
    constructor(public modal: ModalController, protected svcsCtrl: ApiProvider,public navCtrl:NavController,public navParam:NavParams) {
    }
    editDrug(drugId) {
        // alert(drugId)
        let modal = this.modal.create('prescriptionDrugEdit',{add:'edit',drugId,edit:'edit',prescriptionId: this.prescriptionId,appointmentId: this.appointmentId});
        // modal.onDidDismiss(() => {
        //     this.readPrescription();
        //   });
        modal.present();
    }

}