import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../../shared/components/components.module';
import { patientHealthEdit } from './patient-health-edit';

@NgModule({
  declarations: [
    patientHealthEdit
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(patientHealthEdit)
  ],
  exports: [
    patientHealthEdit
  ]
})

export class patientHealthEditModule {
}