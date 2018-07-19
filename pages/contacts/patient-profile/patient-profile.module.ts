import { NgModule } from '@angular/core';
import {IonicPageModule} from 'ionic-angular'
import { patientProfile } from './patient-profile';
import { ComponentsModule } from '../../../shared/components/components.module';

@NgModule({
  declarations: [
    patientProfile
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(patientProfile)
  ],
  exports: [
    patientProfile
  ]
})

export class patientProfileModule {
}