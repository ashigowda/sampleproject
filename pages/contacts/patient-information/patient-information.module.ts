import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../../shared/components/components.module';
import { patientInformation } from './patient-information';

@NgModule({
  declarations: [
    patientInformation
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(patientInformation)
  ],
  exports: [
    patientInformation
  ]
})

export class patientInformationModule {
}