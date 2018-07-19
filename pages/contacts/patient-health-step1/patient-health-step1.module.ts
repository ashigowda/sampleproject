import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../../shared/components/components.module';
import { patientHealthStep1 } from './patient-health-step1';

@NgModule({
  declarations: [
    patientHealthStep1
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(patientHealthStep1)
  ],
  exports: [
    patientHealthStep1
  ]
})

export class patientHealthStep1Module {
}