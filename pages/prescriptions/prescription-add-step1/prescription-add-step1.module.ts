import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { prescriptionAddStep1 } from "./prescription-add-step1";
import { ComponentsModule } from '../../../shared/components/components.module';

@NgModule({
  declarations: [
    prescriptionAddStep1
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(prescriptionAddStep1)
  ],
  exports: [
    prescriptionAddStep1
  ]
})

export class prescriptionAddStep1Module {
}