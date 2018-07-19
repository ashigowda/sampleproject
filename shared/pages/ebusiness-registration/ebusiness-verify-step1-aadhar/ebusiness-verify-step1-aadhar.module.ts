import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../../components/components.module';
import { ebusinessVerifyStep1Aadhar } from "./ebusiness-verify-step1-aadhar";

@NgModule({
  declarations: [
    ebusinessVerifyStep1Aadhar
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ebusinessVerifyStep1Aadhar)
  ],
  exports: [
    ebusinessVerifyStep1Aadhar
  ]
})
export class ebusinessVerifyStep1AadharModule {
}