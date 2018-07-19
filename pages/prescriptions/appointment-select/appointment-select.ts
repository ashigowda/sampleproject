import { NavController, IonicPage, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import { ApiProvider, ClinicPatientAppointmentService } from 'mediserve-services/lib';
import { BasePage } from '../../base/BasePage';
import { Observable } from 'rxjs/Observable';
import { AppointmentResponse } from 'mediserve-services/lib/api/models/appointment-response';

@IonicPage({
    segment: 'patient/:clinicPatientId/appointments',
    defaultHistory: ['prescriptionAddContactSelect']
})

@Component({
    selector: 'page-appointment-select',
    templateUrl: 'appointment-select.html'
})

export class appointmentSelect extends BasePage {

    appointmentList1: any;
    appointmentList: Observable<AppointmentResponse[]>
    currentDate: any;
    show: boolean = false;
    params: ClinicPatientAppointmentService.ListByPatientParams;
   

    constructor(protected navCtrl: NavController,
        protected navParams: NavParams,
        protected svcsCtrl: ApiProvider) {
        super(navCtrl, navParams, svcsCtrl)
        this.currentDate = new Date().toLocaleDateString();
        this.title = "Select Appointment";
    }

    ionViewWillEnter() {
        this.params = {
            clinicId: this.svcsCtrl.homeService.getItem("clinicId"),
            patientId: this.svcsCtrl.homeService.getItem("patientId")
        }
        this.appointmentList = this.svcsCtrl.clinicPatientAppointmentService.listByPatient(this.params).map(appointment =>{
            return appointment.filter(appointment => this.getDate(appointment.appointmentDate) == this.currentDate)
        })
    }
    getDate(date) {
        let date1 = new Date(date).toLocaleDateString();
        return date1;
    }
    // async  appointmentSelect() {
    //     this.svcsCtrl.clinicPatientAppointmentService.listByPatient(this.params).subscribe((response) => {
    //         this.appointmentList = response;
    //         this.appointmentList = this.appointmentList.sort((a, b) => a.appointmentDate > b.appointmentDate ? -1 : 1);
    //         let grouped = this.appointmentList.reduce((groups, appointmentList) => {
    //             let date1 = appointmentList.appointmentDate;
    //             let date = new Date(date1).toLocaleDateString();
    //             groups[date] = groups[date] || [];
    //             groups[date].push(appointmentList);
    //             return groups;
    //         }, {});
    //         this.appointmentList = Object.keys(grouped).map(key => ({ key, appointmentList: grouped[key] }));
    //         console.log("list app" + JSON.stringify(this.appointmentList))
    //         // this.appointmentList.key = new Date().toLocaleDateString();
    //     });
    // }


    refresh(refresher) {
        this.svcsCtrl.homeService.reload(this.appointmentList, refresher);
    }
    
    gotoStep3(appointmentId: string) {
        this.svcsCtrl.homeService.setItem("appointmentId", appointmentId)
        this.navCtrl.push('medicationAllergy')
    }

    viewAppointment(appointment) {
        this.navCtrl.push('prescriptionDetails')
    }

    select() {
        this.show = true;
    }

    bookAppointment() {
        this.navCtrl.push('appointmentAddStep1')
    }

}