import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { ApiProvider, ClinicPatientAppointmentService, HealthResponse, ClinicPatientHealthrecordService } from 'mediserve-services/lib';
import { BasePage } from '../../base/BasePage';
import { Observable } from 'rxjs/Observable';
import { AppointmentResponse } from 'mediserve-services/lib/api/models/appointment-response';

@IonicPage({
    segment: 'patient/:clinicPatientId/appointment-details/:appointmentId/patient-visit',
    defaultHistory: ['appointmentDetails']
})
@Component({
    selector: 'page-patient-visit',
    templateUrl: 'patient-visit.html'
})

export class patientVisit extends BasePage {

    appointment:  AppointmentResponse = {};
    patientHealth: Observable<HealthResponse[]>;
    input: ClinicPatientHealthrecordService.ListByPatientParams;
  
    searchDrug: any;
    start: Observable<AppointmentResponse>;
    params: ClinicPatientAppointmentService.ReadParams;
    startParams: ClinicPatientAppointmentService.StartVisitParams;
    endParams: ClinicPatientAppointmentService.EndVisitParams;
    saveParams: ClinicPatientAppointmentService.SaveVisitParams;

    list: any = [
        {
            symptom: "cold",
            symptom1: "Fever",
            symptom2: "Bp",
            icon: "close"
        }
    ]

    constructor(
        protected navCtrl: NavController,
        protected navParams: NavParams,
        protected svcsCtrl: ApiProvider) {
        super(navCtrl, navParams, svcsCtrl);
        this.title = "Patient Visit";
        this.input = {
            patientId: this.navParams.get('clinicPatientId'),
            clinicId: this.svcsCtrl.homeService.getItem('clinicId')
        }
    }

    ionViewDidEnter() {
        this.patientHealth = this.svcsCtrl.clinicPatientHealthrecordService.listByPatient(this.input);
        this.initializer();

        this.svcsCtrl.clinicPatientAppointmentService.read(this.params).subscribe((response) => {
            this.appointment = response; 
            console.log("app create" + JSON.stringify(this.appointment.status))
            if (this.appointment.status == 'new') {
                this.startParams = {
                    clinicId: this.params.clinicId,
                    appointmentId: this.params.appointmentId,
                }
                this.svcsCtrl.clinicPatientAppointmentService.startVisit(this.startParams).subscribe((response) => {
                    this.appointment = response;
                }, (err) => {
                    console.log(err)
                })
            }
        })
    }

    initializer() {
        this.params = {
            clinicId: this.svcsCtrl.homeService.getItem("clinicId"),
            appointmentId: this.svcsCtrl.homeService.getItem("appointmentId")
        }
    }

    visit() {
        this.endParams = {
            clinicId: this.params.clinicId,
            appointmentId: this.params.appointmentId,
            body: {
                symtoms: this.appointment.symtoms,
                notes: this.appointment.notes
            }
        };

        this.svcsCtrl.clinicPatientAppointmentService.endVisit(this.endParams).subscribe((response) => {
            this.appointment = response;
            this.navCtrl.push('appointmentDetails', ).then(() => {
                const startIndex = this.navCtrl.getActive().index - 2;
                this.navCtrl.remove(startIndex, 2);
            }, (err) => {
                console.log(err)
            })
        })

    }

    save() {
        this.saveParams = {
            clinicId: this.params.clinicId,
            appointmentId: this.params.appointmentId,
            body: {
                symtoms: this.appointment.symtoms,
                notes: this.appointment.notes
            }
        }
        this.svcsCtrl.clinicPatientAppointmentService.saveVisit(this.saveParams).subscribe((response) => {
            this.appointment = response;
            this.navCtrl.push('appointmentDetails', ).then(() => {
                const startIndex = this.navCtrl.getActive().index - 2;
                this.navCtrl.remove(startIndex, 2);
            }, (err) => {
                console.log(err)
            })
        })
    }

   

    gotoAddInformation() {
        this.navCtrl.push('patientHealthStep1', { clinicPatientId: this.navParams.get('clinicPatientId') })
    }

    gotoViewInformation() {
        this.navCtrl.push('patientHealthView', { clinicPatientId: this.navParams.get('clinicPatientId') })
    }

    close(symptom) {
    }

    getDrug($event) {

    }

    onClear() {

    }

    onCancel() {

    }

}