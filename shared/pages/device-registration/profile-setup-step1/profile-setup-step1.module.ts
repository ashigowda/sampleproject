import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from "../../../components/components.module";
import { profilesetupStep1 } from "./profile-setup-step1";

@NgModule({
  declarations: [
    profilesetupStep1
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(profilesetupStep1)
  ],
  exports: [
    profilesetupStep1
  ]
})

export class profilesetupStep1Module {
}