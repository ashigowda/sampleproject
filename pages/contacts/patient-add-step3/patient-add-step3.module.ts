import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../../shared/components/components.module';
import { patientAddStep3 } from './patient-add-step3';

@NgModule({
  declarations: [
    patientAddStep3
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(patientAddStep3)
  ],
  exports: [
    patientAddStep3
  ]
})

export class patientAddStep3Module {
}