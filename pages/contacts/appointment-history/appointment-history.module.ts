import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../../shared/components/components.module';
import {  AppointmentHistory } from './appointment-history';

@NgModule({
  declarations: [
    AppointmentHistory
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(AppointmentHistory)
  ],
  exports: [
    AppointmentHistory
  ]
})

export class appointmentHistoryModule {
}