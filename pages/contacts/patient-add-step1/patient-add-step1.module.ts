import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../../shared/components/components.module';
import { patientAddStep1 } from './patient-add-step1';

@NgModule({
  declarations: [
    patientAddStep1
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(patientAddStep1)
  ],
  exports: [
    patientAddStep1
  ]
})

export class patientAddStep1PageModule {
}