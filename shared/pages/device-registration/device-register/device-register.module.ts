import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from "../../../components/components.module";
import { deviceregister } from "./device-register";

@NgModule({
  declarations: [
    deviceregister
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(deviceregister)
  ],
  exports: [
    deviceregister
  ]
})

export class deviceregisterModule {
}