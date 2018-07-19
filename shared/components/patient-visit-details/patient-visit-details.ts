import { Component, Input } from '@angular/core';
import { AppointmentResponse } from 'mediserve-services/lib';
// import { ClinicAppointment } from 'mediserve-services/lib';

@Component({
  selector: 'patient-visit-details',
  templateUrl: 'patient-visit-details.html'
})

export class PatientVisitDetailsPage {

  data1 = [];
  data = [];

  @Input('text') title: any;
  @Input('appointment') appointment: AppointmentResponse;
  constructor() {

  }

  toggleDetails(data) {
    if (data.showDetails) {
      data.showDetails = false;
      data.icon = 'arrow-forward';
    } else {
      data.showDetails = true;
      data.icon = 'arrow-up';
    }
  }

  toggleDetails1(data1) {
    if (data1.showDetails) {
      data1.showDetails = false;
      data1.icon = 'arrow-forward';
    } else {
      data1.showDetails = false;
      data1.showDetails = true;
      data1.icon = 'arrow-up';
      data1.showDetails = true;
      data1.icon = 'arrow-up';
    }
  }

}