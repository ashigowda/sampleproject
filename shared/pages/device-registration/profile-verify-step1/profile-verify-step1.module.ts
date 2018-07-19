import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from "../../../components/components.module";
import { profileVerifyStep1 } from "./profile-verify-step1";

@NgModule({
  declarations: [
    profileVerifyStep1
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(profileVerifyStep1)
  ],
  exports: [
    profileVerifyStep1
  ]
})

export class profileVerifyStep1Module {
}