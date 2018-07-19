import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../../shared/components/components.module';
import { patientRegister } from './patient-register';

@NgModule({
  declarations: [
    patientRegister
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(patientRegister)
  ],
  exports: [
    patientRegister
  ]
})

export class patientRegisterModule {
}