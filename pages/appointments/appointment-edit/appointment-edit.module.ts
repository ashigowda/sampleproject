import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { appointmentEdit } from "./appointment-edit";
import { ComponentsModule } from '../../../shared/components/components.module';

@NgModule({
  declarations: [
    appointmentEdit
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(appointmentEdit)
  ],
  exports: [
    appointmentEdit
  ]
})

export class appointmentEditModule {
}