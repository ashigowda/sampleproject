import { NgModule } from '@angular/core';

import { ebusinessCheckSelectModule } from './ebusiness-check-select/ebusiness-check-select.module';
import { ebusinessHomeRegisterModule } from './ebusiness-home-register/ebusiness-home-register.module';
import { ebusinessHomeRegisteredModule } from './ebusiness-home-registered/ebusiness-home-registered.module';
import { ebusinessRegistrationStep1Module } from './ebusiness-registration-step1/ebusiness-registration-step1.module';
import { ebusinessRegistrationStep2Module } from './ebusiness-registration-step2/ebusiness-registration-step2.module';
import { ebusinessRegistrationStep3Module } from './ebusiness-registration-step3/ebusiness-registration-step3.module';
import { ebusinessRegistrationStep4Module } from './ebusiness-registration-step4/ebusiness-registration-step4.module';
import { ebusinessVerifyModule } from './ebusiness-verify/ebusiness-verify.module';
import { ebusinessVerifyStep1AadharModule } from './ebusiness-verify-step1-aadhar/ebusiness-verify-step1-aadhar.module';
import { ebusinessVerifyStep2OtpModule } from './ebusiness-verify-step2-otp/ebusiness-verify-step2-otp.module';
import { ebusinessVerifyStep3ConfirmModule } from './ebusiness-verify-step3-confirm/ebusiness-verify-step3-confirm.module';
import { ebusinessVerifyUploadDocsModule } from './ebusiness-verify-upload-docs/ebusiness-verify-upload-docs.module';
import { ebusinessVerifySelectFileModule } from "./ebusiness-verify-select-file/ebusiness-verify-select-file.module";
import { businessListModule } from './business-list/business-list.module';


@NgModule({
  declarations: [
  ], 
  imports: [
    ebusinessCheckSelectModule,
    ebusinessHomeRegisterModule,
    ebusinessHomeRegisteredModule,
    ebusinessRegistrationStep1Module,
    ebusinessRegistrationStep2Module,
    ebusinessRegistrationStep3Module,
    ebusinessRegistrationStep4Module,
    ebusinessVerifyModule,
    ebusinessVerifyStep1AadharModule,
    ebusinessVerifyStep2OtpModule,
    ebusinessVerifyStep3ConfirmModule,
    ebusinessVerifyUploadDocsModule,
    ebusinessVerifySelectFileModule,
    businessListModule
  ],
})
export class ebusinessRegistrationModule {} 