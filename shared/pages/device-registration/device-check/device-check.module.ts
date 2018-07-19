import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from "../../../components/components.module";
import { devicecheck } from "./device-check";

@NgModule({
  declarations: [
    devicecheck
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(devicecheck)
  ],
  exports: [
    devicecheck
  ]
})

export class devicecheckModule {
}