import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { appointmentSelect } from "./appointment-select";
import { ComponentsModule } from '../../../shared/components/components.module';

@NgModule({
  declarations: [
    appointmentSelect
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(appointmentSelect)
  ],
  exports: [
    appointmentSelect
  ]
})

export class appointmentSelectModule {
}