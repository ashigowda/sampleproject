import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../../shared/components/components.module';
import { patientAddStep2 } from './patient-add-step2';

@NgModule({
  declarations: [
    patientAddStep2
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(patientAddStep2)
  ],
  exports: [
    patientAddStep2
  ]
})

export class patientAddStep2PageModule {
}