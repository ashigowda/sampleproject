import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from "../../../components/components.module";
import { deviceerror } from "./device-error";

@NgModule({
  declarations: [
    deviceerror
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(deviceerror)
  ],
  exports: [
    deviceerror
  ]
})

export class deviceerrorModule {
}