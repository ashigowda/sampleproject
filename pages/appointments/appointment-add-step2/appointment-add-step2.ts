import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams } from 'ionic-angular';
import { ApiProvider, ClinicPatientService, AppointmentCreate, ClinicUserService, ClinicPatientAppointmentService, PatientResponse, AppointmentResponse } from 'mediserve-services/lib';
import { BasePage } from '../../base/BasePage';
import { Observable } from 'rxjs/Observable';

@IonicPage({
    segment: ':clinicPatientId/appointment-add-step2',
    defaultHistory: ['appointmentAddStep1']
})

@Component({
    selector: 'page-appointment-add-step2',
    templateUrl: 'appointment-add-step2.html'
})

export class appointmentAddStep2 extends BasePage {

    appointmentCreate: Observable<AppointmentResponse>;
    clinicUserId: any;
    edit: string;
    title = "Confirm";
    user: any;
    appointment: AppointmentCreate;

    clinicPatient: Observable<PatientResponse>;
    input: ClinicPatientService.ReadParams;
    param: ClinicUserService.ReadParams;
    create: ClinicPatientAppointmentService.CreateParams;

    constructor(
        protected navCtrl: NavController,
        protected navParams: NavParams,
        protected svcsCtrl: ApiProvider
    ) {
        super(navCtrl, navParams, svcsCtrl);
        this.edit = this.navParams.get('edit');
    }

    ionViewWillEnter() {
        this.initialize();
        this.getAppointment().then(() =>
            setTimeout(() => {
                this.clinicPatient = this.svcsCtrl.clinicPatientService.read(this.input);
            }, 500));
        // this.readUser();
    }

    initialize() {
        this.input = {
            patientId: this.svcsCtrl.homeService.getItem('patientId'),
            clinicId: this.svcsCtrl.homeService.getItem('clinicId')
        }
    }

    async getAppointment() {
        this.appointment = this.svcsCtrl.homeService.getItem('appointment');
        console.log("app" + JSON.stringify(this.appointment))
    }

    readUser() {
        this.param = {
            clinicUserId: this.appointment.doctor,
            clinicId: this.input.clinicId
        }

        this.svcsCtrl.clinicUserService.read(this.param).subscribe((response) => {
            this.user = response;
            console.log("read user" + JSON.stringify(this.user))
        })
    }

    confirm(patient) {
        this.create = {
            clinicId: this.input.clinicId,
            body: {
                doctor: this.appointment.doctor,
                patient: patient._id,
                appointmentDate: this.appointment.appointmentDate,
                appointmentTime: this.appointment.appointmentTime,
                symtoms: this.appointment.symtoms
            }
        }

        this.svcsCtrl.clinicPatientAppointmentService.create(this.create).subscribe((response) => {
            console.log("appointment created" + JSON.stringify(response));
            this.navCtrl.push('appointmentList'), (err) => {
                console.log(err)
            }
        })
    }

    editappointment() {
       this.navCtrl.pop();
    }

}