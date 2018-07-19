import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { appointmentDetails } from "./appointment-details";
import { ComponentsModule } from '../../../shared/components/components.module';

@NgModule({
  declarations: [
    appointmentDetails
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(appointmentDetails)
  ],
  exports: [
    appointmentDetails
  ]
})

export class appointmentDetailsModule {
}