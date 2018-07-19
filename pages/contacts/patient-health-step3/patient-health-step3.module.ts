import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../../shared/components/components.module';
import { patientHealthStep3 } from './patient-health-step3';

@NgModule({
  declarations: [
    patientHealthStep3
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(patientHealthStep3)
  ],
  exports: [
    patientHealthStep3
  ]
})

export class patientHealthStep3Module {
}