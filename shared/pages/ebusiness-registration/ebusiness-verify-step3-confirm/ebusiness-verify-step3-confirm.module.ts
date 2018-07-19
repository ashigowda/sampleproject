import { NgModule } from '@angular/core';
import {IonicPageModule} from 'ionic-angular'
import { ComponentsModule } from '../../../components/components.module';
import { ebusinessVerifyStep3Confirm } from "./ebusiness-verify-step3-confirm";

@NgModule({
  declarations: [
    ebusinessVerifyStep3Confirm
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ebusinessVerifyStep3Confirm)
  ],
  exports: [
    ebusinessVerifyStep3Confirm
  ]
})
export class ebusinessVerifyStep3ConfirmModule {
}