import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from "../../../components/components.module";
import { profileVerifyStep2Pin } from "./profile-verify-step2-pin";

@NgModule({
  declarations: [
    profileVerifyStep2Pin
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(profileVerifyStep2Pin)
  ],
  exports: [
    profileVerifyStep2Pin
  ]
})

export class profileVerifyStep2PinModule {
}