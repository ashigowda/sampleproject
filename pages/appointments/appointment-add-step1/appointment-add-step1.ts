import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage, ToastController, ModalController, ActionSheetController } from 'ionic-angular';
import { ApiProvider, ClinicUserResponse, AppointmentCreate, AppointmentResponse } from 'mediserve-services';
import { BasePage } from '../../base/BasePage';
import { Observable } from 'rxjs/Observable';
@IonicPage({
  segment: ':clinicPatientId/appointment-add-step1',
  defaultHistory: ['contactSelect']
})

@Component({
  selector: 'page-appointment-add-step1',
  templateUrl: 'appointment-add-step1.html'
})

export class appointmentAddStep1 extends BasePage {

  toast: any;
  appointmentList: AppointmentResponse[];
  user: Observable<ClinicUserResponse[]>;
  appointment: AppointmentCreate = {};
  appointmentList1: any = [];
  clinicId: any;
  appointmentdate: any;
  minDate: any;
  require: any = "true";

  timeSlots: any = [];
  dateTime = new Date();
  timeStr = '';
  
  constructor(
    protected navCtrl: NavController,
    protected navParams: NavParams,
    protected svcsCtrl: ApiProvider,
    public toastCtrl: ToastController,
    public modalCtrl: ModalController, public actionSheet: ActionSheetController

  ) {
    super(navCtrl, navParams, svcsCtrl);
    this.title = "Create Appointment";
    this.appointment.symtoms = [];
    this.clinicId = this.svcsCtrl.homeService.getItem('clinicId');
    this.minDate = new Date().toISOString()

  }

  ionViewDidLoad() {
    this.onChange("10:00-18:00");
  }

  onChange(slot) {
    var startHour = slot.substring(0, 2)
    startHour = parseInt(startHour)
    var endHour = slot.substring(6, 8); 
    endHour = parseInt(endHour);
    var interval = 15;
    if (!startHour) {
      endHour = 9;
    }
    if (!endHour) {
      endHour = 20;
    }
    this.timeSlots = [];
    this.dateTime.setHours(startHour, 0, 0, 0);
    while (new Date(this.dateTime.getTime()).getHours() < endHour) {
      this.timeStr = ('0' + this.dateTime.getHours()).slice(-2) + ':' + ('0' + this.dateTime.getMinutes()).slice(-2);
      this.timeSlots.push(this.timeStr);
      this.dateTime = new Date(this.dateTime.getTime() + interval * 60000);
    }
    return this.timeSlots;
  }

  getAppointmentTime(time) {
    this.appointment.appointmentTime = time;
  }

  ionViewWillEnter() {
    this.user = this.svcsCtrl.clinicUserService.list(this.clinicId);
  }

  appointmentDate(date) {
    this.appointmentdate = date;
    this.svcsCtrl.clinicPatientAppointmentService.list(this.clinicId).subscribe((response) => {
      this.appointmentList = response;
      let appointmentList12 = this.appointmentList.filter(appointment => this.getDate(appointment.appointmentDate) == this.getDate(this.appointmentdate) && appointment.status != 'cancelled');

      for (let y in appointmentList12) {
        this.appointmentList1 = this.appointmentList1 || []
        this.appointmentList1.push(appointmentList12[y].appointmentTime)
      }

      for (let x in this.appointmentList1) {
        let index = this.appointmentList1[x];
        this.timeSlots.splice(index, 1)
      }
      
      this.timeSlots = this.timeSlots.filter(timeslot =>  this.appointmentList1 )
      this.presentToast('The follwing appointment timings are not available please choose another!... ', JSON.stringify(this.appointmentList1))
      this.appointmentList1 = null;

    })
    return this.timeSlots;
  }

  getInputField() {
    let profileModal = this.modalCtrl.create('searchSymptom', { appointment: this.appointment });
    profileModal.present();
  }

  removeSymptom(index) {
    this.appointment.symtoms.splice(index, 1)
  }

  // appointmentTime(time) {
  //   this.require = "true";
  //   this.svcsCtrl.clinicPatientAppointmentService.list(this.clinicId).subscribe((response) => {
  //     this.appointmentList = response;
  //     let appointmentList12 = this.appointmentList.filter(appointment => this.getDate(appointment.appointmentDate) == this.getDate(this.appointmentdate) && appointment.status != 'cancelled');
  //     for (let y in appointmentList12) {
  //       if (appointmentList12[y].appointmentTime === time) {
  //         this.appointment.appointmentTime = null;
  //         return this.presentToast('alreay booked.Pleace choose another time!', '')
  //       }
  //     }
  //   })
  // }


  presentToast(message, value) {
    this.toast = this.toastCtrl.create({
      message: message + value,
      position: 'top',
      showCloseButton: true,
      closeButtonText: 'Ok'
    });
    this.toast.onDidDismiss(this.dismissHandler);
    this.toast.present();
  }
  private dismissHandler() {

    console.info('Toast onDidDismiss()');
  }

  getDate(date) {
    let date1 = new Date(date).toLocaleDateString();
    return date1;
  }

  createAppointment1() {
    if (this.appointment.appointmentTime == null || this.appointment.appointmentTime == undefined) {
      this.require = "false";
    } else {
      this.require = "true";
      this.appointment.patient = this.svcsCtrl.homeService.getItem('patientId');
      this.svcsCtrl.clinicPatientAppointmentService.setItem('appointment', this.appointment);
      this.navCtrl.push('appointmentAddStep2')
    }
  }

}