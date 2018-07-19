import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../../shared/components/components.module';
import { patientList } from './patient-list';

@NgModule({
  declarations: [
    patientList
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(patientList)
  ],
  exports: [
    patientList
  ]
})

export class patientListModule {
}