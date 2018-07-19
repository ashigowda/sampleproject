import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../../shared/components/components.module';
import { patientHealthStep2 } from './patient-health-step2';

@NgModule({
  declarations: [
    patientHealthStep2
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(patientHealthStep2)
  ],
  exports: [
    patientHealthStep2
  ]
})

export class patientHealthStep2Module {
}