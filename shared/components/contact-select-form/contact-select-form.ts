import { Component, Input } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

@Component({
  selector: 'contact-select-form',
  templateUrl: 'contact-select-form.html'
})

export class ContactSelectForm {

  @Input('show') show: any;
  @Input('data') data: any;
  @Input('data1') data1: any
  @Input('show1') show1: any;
  @Input('members') members: any;
  @Input('contact') contact: any;

  patientId: any;

  constructor(public nav: NavController, public modal: ModalController) {

  }
  
  changeContact() {
    if (this.data1 != 'pre' && this.data != 'write') {
      this.nav.push('appointmentAddcontactSearch', { data: 'book'})
    } else {
      this.nav.push('contactSearch', { data: 'write' })
    }
  }
  changeContact1() {
    this.nav.push('appointmentAddcontactSearch', { data: 'edit'})

  }
  addPatient() {
    this.nav.push('patientAdd')
  }

}