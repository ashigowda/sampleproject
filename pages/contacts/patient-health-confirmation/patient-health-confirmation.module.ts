import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../../shared/components/components.module';
import { patientHealthConfirmation } from './patient-health-confirmation';

@NgModule({
  declarations: [
    patientHealthConfirmation
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(patientHealthConfirmation)
  ],
  exports: [
    patientHealthConfirmation
  ]
})

export class patientHealthConfirmationModule {
}