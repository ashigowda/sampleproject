import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { prescriptionAddStep2 } from "./prescription-add-step2";
import { ComponentsModule } from '../../../shared/components/components.module';

@NgModule({
  declarations: [
    prescriptionAddStep2
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(prescriptionAddStep2)
  ],
  exports: [
    prescriptionAddStep2
  ]
})

export class prescriptionAddStep2Module {
}