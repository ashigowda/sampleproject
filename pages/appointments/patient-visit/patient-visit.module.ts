import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { patientVisit } from './patient-visit';
import { ComponentsModule } from '../../../shared/components/components.module';

@NgModule({
  declarations: [
    patientVisit
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(patientVisit)
  ],
  exports: [
    patientVisit
  ]
})

export class patientVisitModule {
}