import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { patientEdit } from "./patient-edit";
import { ComponentsModule } from '../../../shared/components/components.module';

@NgModule({
  declarations: [
    patientEdit
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(patientEdit)
  ],
  exports: [
    patientEdit
  ]
})

export class patientEditModule {
}