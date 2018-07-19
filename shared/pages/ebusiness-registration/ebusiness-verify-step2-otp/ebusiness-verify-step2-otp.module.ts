import { NgModule } from '@angular/core';
import {IonicPageModule} from 'ionic-angular'
import { ComponentsModule } from '../../../components/components.module';
import { ebusinessVerifyStep2Otp } from "./ebusiness-verify-step2-otp";

@NgModule({
  declarations: [
    ebusinessVerifyStep2Otp
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ebusinessVerifyStep2Otp)
  ],
  exports: [
    ebusinessVerifyStep2Otp
  ]
})
export class ebusinessVerifyStep2OtpModule {
}