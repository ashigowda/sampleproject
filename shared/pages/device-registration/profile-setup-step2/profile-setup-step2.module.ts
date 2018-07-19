import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from "../../../components/components.module";
import { profilesetupStep2 } from "./profile-setup-step2";

@NgModule({
  declarations: [
    profilesetupStep2
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(profilesetupStep2)
  ],
  exports: [
    profilesetupStep2
  ]
})

export class profilesetupStep2Module {
}