import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from "../../../components/components.module";
import { deviceverify } from "./device-verify";

@NgModule({
  declarations: [
    deviceverify
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(deviceverify)
  ],
  exports: [
    deviceverify
  ]
})

export class deviceverifyModule {
}