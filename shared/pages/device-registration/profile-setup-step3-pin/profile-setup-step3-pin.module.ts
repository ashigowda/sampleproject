import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from "../../../components/components.module";
import { profileSetupStep3Pin } from "./profile-setup-step3-pin";

@NgModule({
  declarations: [
    profileSetupStep3Pin
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(profileSetupStep3Pin)
  ],
  exports: [
    profileSetupStep3Pin
  ]
})

export class profileSetupStep3PinModule {
}