import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { clinicSettings } from "./clinic-settings";
import { ComponentsModule } from '../../../shared/components/components.module';

@NgModule({
  declarations: [
    clinicSettings
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(clinicSettings)
  ],
  exports: [
    clinicSettings
  ]
})

export class clinicSettingsModule {
}