import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams, App } from 'ionic-angular';
import { ApiProvider, ClinicResponse, UserTemplate, AppointmentResponse } from 'mediserve-services/lib';
import { BasePage } from '../base/BasePage';
import { Observable } from 'rxjs';

@IonicPage()

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class home extends BasePage {

  appointmentList: Observable<AppointmentResponse[]>;
  profile: Observable<UserTemplate>;
  business: Observable<ClinicResponse>;

  currentTime: string;
  currentDate: string;
  appointmentLists: any = [];
  title: any = "Medi Clinic"
 

  navList: any = [
    {
      order: 'Patients',
      index: 1,
      icon: 'cog',
      page: 'tabs'
    },
    {
      order: 'Appointments',
      index: 2,
      icon: 'clock',
      page: 'tabs'
    },
    {
      order: 'Prescriptions',
      index: 3,
      icon: 'list-box',
      page: 'tabs'
    }
  ]

  constructor(
    protected navCtrl: NavController,
    protected navParams: NavParams,
    protected svcsCtrl: ApiProvider,
    protected app: App
  ) {
    super(navCtrl, navParams, svcsCtrl);
    this.title = "MediServe";
    this.currentDate = new Date().toLocaleDateString();
    this.currentTime = new Date().toLocaleTimeString();
  }

  ionViewWillEnter() {
    let clinicId = this.svcsCtrl.homeService.getItem('clinicId');
    this.profile = this.svcsCtrl.profileService.read();
    this.business = this.svcsCtrl.clinicBusinessService.read(clinicId)
  }

  gotoPatientList(index) {
    this.app.getRootNav().getActiveChildNav().select(index);
  }

  sortAppointmentsByTime(): Observable<AppointmentResponse[]> {
    return this.appointmentList = this.svcsCtrl.clinicPatientAppointmentService.list(this.svcsCtrl.homeService.getItem("clinicId"))
      .map(appointmentList => appointmentList.filter(appointment => (this.getDate(appointment.appointmentDate) == this.currentDate && appointment.status == 'new')))
      
  }

  //   getItems(): Observable<Symtom[]> {
  //     return this.symptomsList = this.svcsCtrl.listofvaluesUtilService.listSymtoms()
  //         .map(symptomsList => symptomsList.filter(symptomsample => (symptomsample.symtom.toLowerCase().indexOf(this.symptom.toLowerCase()) > -1)))
  // }

  getDate(date) {
    let date1 = new Date(date).toLocaleDateString();
    return date1;
  }

  gotoPage(page: any) {
    this.navCtrl.push('clinicIndex', { tabIndex: 1 })
  }

  gotoChatPage() {
    this.navCtrl.push('chatHistory')
  }

}