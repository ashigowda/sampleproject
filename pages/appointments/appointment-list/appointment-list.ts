import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { ApiProvider, ClinicResponse, UserTemplate, ClinicPatientAppointmentService, AppointmentResponse } from 'mediserve-services';
import { BasePage } from '../../base/BasePage';
import { Observable } from 'rxjs';

@IonicPage()
@Component({
    selector: 'page-appointment-list',
    templateUrl: 'appointment-list.html',
})

export class appointmentList extends BasePage {

    appointmentList3: Observable<AppointmentResponse[]>;
    appointmentList1: Observable<AppointmentResponse[]>;
    appointmentList2: Observable<AppointmentResponse[]>;

    show: boolean;
    user: any//Observable<ClinicUserResponse[]>;
    doctor: any;
    loadingOrError: any;
    center = 'center';

    appointmentId: any;
    name: any;

    profile: Observable<UserTemplate>;
    business: Observable<ClinicResponse>;
    start = 4;
    appointmentList: Observable<AppointmentResponse[]>;
    currentDate: string;
    todayHour: number;

    appointment: string = "0";
    title = 'Appointments';
    data:any;

    params: ClinicPatientAppointmentService.CancelParams;
    clinicId = this.svcsCtrl.homeService.getItem('clinicId');

    constructor(protected navCtrl: NavController,
        protected navParams: NavParams,
        protected svcsCtrl: ApiProvider) {
        super(navCtrl, navParams, svcsCtrl);
        this.todayHour = new Date().getHours();
        this.currentDate = new Date().toLocaleDateString();
        
        let clinicId = this.svcsCtrl.homeService.getItem('clinicId');
        this.profile = this.svcsCtrl.profileService.read();
        this.business = this.svcsCtrl.clinicBusinessService.read(clinicId)
        this.listAppointments();
        this.user = this.svcsCtrl.clinicUserService.list(this.clinicId)
    }

    // ionViewWillEnter() {
    //     let clinicId = this.svcsCtrl.homeService.getItem('clinicId');
    //     this.profile = this.svcsCtrl.profileService.read();
    //     this.business = this.svcsCtrl.clinicBusinessService.read(clinicId)
    //     this.listAppointments();
    //     this.user = this.svcsCtrl.clinicUserService.list(this.clinicId)
    // }

    async listAppointments() {
        this.appointmentList = this.svcsCtrl.clinicPatientAppointmentService.list(this.clinicId)
        this.appointmentList1 = this.appointmentList.map(appointment => appointment.filter(appointment => this.getDate(appointment.appointmentDate) == this.currentDate && appointment.status != 'cancelled' && appointment.status != 'closed'));
        this.appointmentList2 = this.appointmentList.map(appointment => appointment.filter(appointment => this.getDate(appointment.appointmentDate) > this.currentDate));
        this.appointmentList3 = this.appointmentList.map(appointment =>appointment.sort((a, b) => this.getDate(a.appointmentTime) > this.getDate(b.appointmentTime) ? -1 : 1));
        this.appointmentList3 = this.appointmentList3.map(appointment => appointment.filter(appointment=> appointment.status == 'closed'))
    }

    getDate(date) {
        let date1 = new Date(date).toLocaleDateString();
        return date1;
    }

    refresh(refresher) {
        this.svcsCtrl.homeService.reload(this.appointmentList, refresher);
    }

    viewAppointment(appointmentId, clinicPatientId) {
        this.appointmentId = this.svcsCtrl.homeService.setItem('appointmentId', appointmentId);
        this.navCtrl.push('appointmentDetails')
    }

    CreateAppointment() {
        this.data = this.svcsCtrl.homeService.setItem('data','createAppointment')
        this.navCtrl.push('appointmentAddcontactSearch')
    }

    editAppointment(appointmentId) {
        this.appointmentId = this.svcsCtrl.homeService.setItem('appointmentId', appointmentId)
        this.navCtrl.push('appointmentEdit')
    }

    CancelAppointment(appointmentId) {
        this.params = {
            clinicId: this.clinicId,
            appointmentId: appointmentId
        }

        this.svcsCtrl.clinicPatientAppointmentService.cancel(this.params).subscribe((response) => {
            this.navCtrl.push('appointmentList')
        })
    }

    // filter() {
    //     this.show = true;
    //     this.appointmentList1 = this.appointmentList.filter(user => user.doctor.firstName === this.name);

    // this.appointmentList1.sort((a) => {
    //     if (a.status == 'new') {
    //         return -1;
    //     }
    //     else if (a.status == 'inprogress') {
    //         return -1
    //     }
    //     else {
    //         return 1
    //     }
    // })

    //}

    doInfinite(infiniteScroll) {
        console.log('Begin async operation');
        this.start += 2;
        console.log('Async operation has ended');
        infiniteScroll.complete();
    }

}