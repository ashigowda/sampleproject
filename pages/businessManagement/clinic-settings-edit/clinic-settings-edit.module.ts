
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { clinicSettingsEdit } from "./clinic-settings-edit";
import { ComponentsModule } from '../../../shared/components/components.module';

@NgModule({
  declarations: [
    clinicSettingsEdit
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(clinicSettingsEdit)
  ],
  exports: [
    clinicSettingsEdit
  ]
})

export class clinicSettingsEditModule {
}