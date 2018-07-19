import { NgModule } from '@angular/core';
import { devicecheckModule } from "./device-check/device-check.module";
import { deviceerrorModule } from "./device-error/device-error.module";
import { deviceregisterModule } from "./device-register/device-register.module";
import { deviceverifyModule } from "./device-verify/device-verify.module";
import { profilesetupStep1Module } from "./profile-setup-step1/profile-setup-step1.module";
import { profilesetupStep2Module } from "./profile-setup-step2/profile-setup-step2.module";
import { profileSetupStep3PinModule } from "./profile-setup-step3-pin/profile-setup-step3-pin.module";
import { profileVerifyStep1Module } from "./profile-verify-step1/profile-verify-step1.module";
import { profileVerifyStep2PinModule } from "./profile-verify-step2-pin/profile-verify-step2-pin.module";
import { signinModule } from "./signin/signin.module";
import { signoutModule } from "./signout/signout.module";

@NgModule({
  declarations: [

  ],
  imports: [
    devicecheckModule,
    deviceerrorModule,
    deviceregisterModule,
    deviceverifyModule,
    profilesetupStep1Module,
    profilesetupStep2Module,
    profileSetupStep3PinModule,
    profileVerifyStep1Module,
    profileVerifyStep2PinModule,
    signinModule,
    signoutModule
  ],
})
export class deviceRegistrationModule { }