import { Component } from '@angular/core';
import { IonicPage, NavParams, NavController, ToastController, ModalController, ActionSheetController } from 'ionic-angular';
import { ApiProvider, ClinicPatientAppointmentService, ClinicUserResponse, AppointmentResponse } from 'mediserve-services/lib';
import { BasePage } from '../../base/BasePage';
import { Observable } from 'rxjs/Observable';

@IonicPage({
  segment: 'appointment-edit/:appointmentId',
  defaultHistory: ['appointmentList']
})

@Component({
  selector: 'page-appointment-edit',
  templateUrl: 'appointment-edit.html'
})

export class appointmentEdit extends BasePage {

  appointment: AppointmentResponse = {};
  minDate: string;
  toast: any;
  appointmentList1: any;
  appointmentdate: any;
  appointmentList: AppointmentResponse[];
  user: Observable<ClinicUserResponse[]>;

  title = "Edit Appointment"
  timeSlots: any = [];
  dateTime = new Date();
  timeStr = '';
  time: any;
  input: ClinicPatientAppointmentService.ReadParams;
  update: ClinicPatientAppointmentService.UpdateParams;

  constructor(
    protected navCtrl: NavController,
    protected navParams: NavParams,
    protected svcsCtrl: ApiProvider,
    public toastCtrl: ToastController,
    public modalCtrl: ModalController,
    public actionSheet: ActionSheetController
  ) {
    super(navCtrl, navParams, svcsCtrl);
    this.minDate = new Date().toISOString()

  }

  ionViewWillEnter() {
    this.initialize();
    this.readAppointment()
    this.onChange("10:00-18:00")
  }

  ionViewDidEnter() {
    setTimeout(() => {
      this.listUser();
    }, 1000);
  }

  initialize() {
    this.input = {
      appointmentId: this.svcsCtrl.homeService.getItem('appointmentId'),
      clinicId: this.svcsCtrl.homeService.getItem('clinicId')
    }
  }

  readAppointment() {
    this.svcsCtrl.clinicPatientAppointmentService.read(this.input).subscribe((response) => {
      this.appointment = response;
      console.log("appointment read" + JSON.stringify(this.appointment))

      this.appointmentdate = this.appointment.appointmentDate;
      this.svcsCtrl.clinicPatientAppointmentService.list(this.input.clinicId).subscribe((response) => {
        this.appointmentList = response;
        let appointmentList12 = this.appointmentList.filter(appointment => this.getDate(appointment.appointmentDate) == this.getDate(this.appointmentdate));

        for (let y in appointmentList12) {
          this.appointmentList1 = this.appointmentList1 || []
          if (appointmentList12[y].appointmentTime != this.appointment.appointmentTime) {
            this.appointmentList1.push(appointmentList12[y].appointmentTime)
          }
        }

        for (let x in this.appointmentList1) {
          let index = this.appointmentList1[x];
          this.timeSlots.splice(index, 1);

        }

        this.timeSlots = this.timeSlots.filter(timeslot => this.appointmentList1)
        if (this.appointmentList1 != '') {
          this.presentToast('The follwing appointment timings are not available please choose another!... ', JSON.stringify(this.appointmentList1))
          this.appointmentList1 = null;
        }
      })
      return this.timeSlots;
    })
  }




  async listUser() {
    this.user = this.svcsCtrl.clinicUserService.list(this.input.clinicId);
  }

  getInputField() {
    let profileModal = this.modalCtrl.create('searchSymptom', { appointment: this.appointment });
    profileModal.present();
  }

  removeSymptom(index) {
    this.appointment.symtoms.splice(index, 1)
  }

  appointmentDate(date) {
    this.appointmentdate = date;
    this.svcsCtrl.clinicPatientAppointmentService.list(this.input.clinicId).subscribe((response) => {
      this.appointmentList = response;
      let appointmentList12 = this.appointmentList.filter(appointment => this.getDate(appointment.appointmentDate) == this.getDate(this.appointmentdate));

      for (let y in appointmentList12) {
        this.appointmentList1 = this.appointmentList1 || []
        if (appointmentList12[y].appointmentTime != this.appointment.appointmentTime) {
          this.appointmentList1.push(appointmentList12[y].appointmentTime)
        }
      }

      for (let x in this.appointmentList1) {
         let index = this.appointmentList1[x];
        this.timeSlots.splice(index, 1)
      }

      this.timeSlots = this.timeSlots.filter(timeslot => this.appointmentList1)
      this.presentToast('The follwing appointment timings are not available please choose another!... ', JSON.stringify(this.appointmentList1))
      this.appointmentList1 = null;

    })
    return this.timeSlots;
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

  UpdateAppointment() {

    this.update = {
      body: {
        appointmentDate: this.appointment.appointmentDate,
        appointmentTime: this.appointment.appointmentTime,
        symtoms: this.appointment.symtoms
      },
      clinicId: this.input.clinicId,
      appointmentId: this.input.appointmentId
    }

    this.svcsCtrl.clinicPatientAppointmentService.update(this.update).subscribe((response) => {

      this.navCtrl.push('appointmentList')
    }, (err) => {
      console.log(err)
    })
  }

} 