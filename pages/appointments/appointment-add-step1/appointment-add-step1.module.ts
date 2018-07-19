import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { appointmentAddStep1 } from "./appointment-add-step1";
import { ComponentsModule } from '../../../shared/components/components.module';

@NgModule({
  declarations: [
    appointmentAddStep1
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(appointmentAddStep1)
  ],
  exports: [
    appointmentAddStep1
  ]
})

export class appointmentAddStep1Module {
}