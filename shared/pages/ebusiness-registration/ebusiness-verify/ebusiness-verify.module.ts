import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../../components/components.module';
import { ebusinessVerify } from "./ebusiness-verify";

@NgModule({
  declarations: [
    ebusinessVerify
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ebusinessVerify)
  ],
  exports: [
    ebusinessVerify,
  ]
})
export class ebusinessVerifyModule {
}