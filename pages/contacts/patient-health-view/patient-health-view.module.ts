import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../../shared/components/components.module';
import { patientHealthView } from './patient-health-view';

@NgModule({
  declarations: [
    patientHealthView
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(patientHealthView)
  ],
  exports: [
    patientHealthView
  ]
})

export class patientHealthViewModule {
}