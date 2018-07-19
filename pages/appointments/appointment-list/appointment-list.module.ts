import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { appointmentList } from "./appointment-list";
import { ComponentsModule } from '../../../shared/components/components.module';

@NgModule({
  declarations: [
    appointmentList
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(appointmentList)
  ],
  exports: [
    appointmentList
  ]
})

export class appointmentListModule {
}