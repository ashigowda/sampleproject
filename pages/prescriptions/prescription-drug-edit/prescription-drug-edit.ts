import { Component } from '@angular/core';
import { NavController, ViewController, NavParams, IonicPage } from 'ionic-angular';
import { ApiProvider, ClinicPatientPrescriptionService, ClinicPatientAppointmentService } from 'mediserve-services/lib';
import { BasePage } from '../../base/BasePage';
import { AppointmentResponse } from 'mediserve-services/lib/api/models/appointment-response';
import { Observable } from 'rxjs/Observable';

@IonicPage({
    segment: 'prescription-drug-edit/:prescriptionId'
})

@Component({
    selector: 'page-prescription-drug-edit',
    templateUrl: 'prescription-drug-edit.html'
})

export class prescriptionDrugEdit extends BasePage {

    prescriptionItem: any = {};
    prescriptionItems: any = {};
    appointment: Observable<AppointmentResponse>;

    prescription: any;
    edit: any;
    medicine = [];
    list: any;
    title = "Edit Drug"
    icon = 'close'
    data: any;

    input: ClinicPatientPrescriptionService.ReadParams;
    update: ClinicPatientPrescriptionService.UpdateParams;
    params: ClinicPatientAppointmentService.ReadParams;

    appointmentId = this.svcsCtrl.homeService.getItem('appointmentId');
    prescriptionItemId :any;

    constructor(protected navCtrl: NavController,
        public view: ViewController,
        public navParam: NavParams,
        protected svcsCtrl: ApiProvider) {
        super(navCtrl, navParam, svcsCtrl);
        this.prescriptionItemId = this.svcsCtrl.homeService.getItem("prescriptionItemId");
    }

    ionViewWillEnter() {
        this.initializer();
        this.readAppointment();
        this.readPrescriptionItem();
    }

    initializer() {
        this.input = {
            clinicId: this.svcsCtrl.homeService.getItem("clinicId"),
            prescriptionId: this.svcsCtrl.homeService.getItem("prescriptionId")
        }
    }

    async  readAppointment() {
        this.params = {
            clinicId: this.svcsCtrl.homeService.getItem("clinicId"),
            appointmentId: this.svcsCtrl.homeService.getItem("appointmentId")
        }
        this.appointment = this.svcsCtrl.clinicPatientAppointmentService.read(this.params);
    }

    readPrescriptionItem() {
        this.svcsCtrl.clinicPatientPrescriptionService.read(this.input).subscribe((response) => {
            this.prescription = response;
            console.log("prescriptions" + JSON.stringify(this.prescription))
            this.prescriptionItem = this.prescription.items.find(prescription => prescription._id === this.prescriptionItemId);

            console.log("items" + JSON.stringify(this.prescriptionItem))
        })
    }

    updateItem(appointment) {
        this.prescriptionItems = this.prescription.items;
        console.log("edit items" + JSON.stringify(this.prescriptionItems));
        let prescriptionItem = this.prescription.items.find(prescription => prescription._id === this.prescriptionItemId);
        let index = this.prescriptionItems.indexOf(prescriptionItem);
        this.prescriptionItems[index] = this.prescriptionItem;
  
        // let prescriptionItems = this.svcsCtrl.homeService.setItem('prescriptionItems', this.prescriptionItems);
        // this.prescriptionItems = this.svcsCtrl.homeService.getItem('prescriptionItems')
        console.log("updte items" + JSON.stringify(this.prescriptionItems))
        this.prescription.appointment = appointment._id;
        this.prescription.doctor = appointment.doctor._id;
        this.prescription.patient = appointment.patient._id;
        this.prescription.items = this.prescriptionItems;
        this.update = {
            clinicId: this.input.clinicId,
            prescriptionId: this.input.prescriptionId,
            body: this.prescription
        }
        console.log("prescriptions items" + JSON.stringify(this.update.body))
        this.svcsCtrl.clinicPatientPrescriptionService.update(this.update).subscribe((response) => {
            this.prescriptionItem = response;
            this.prescriptionItems = null;
            console.log("update presc" + JSON.stringify(this.prescriptionItem))
            this.navCtrl.push("prescriptionItemEdit").then(() => {
                const startIndex = this.navCtrl.getActive().index - 2;
                this.navCtrl.remove(startIndex, 2);
            });
        })
    }

    cancel() {
        this.view.dismiss();
    }

}