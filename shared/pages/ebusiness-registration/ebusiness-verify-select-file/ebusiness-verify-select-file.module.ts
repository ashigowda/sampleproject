import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../../components/components.module';
import { ebusinessVerifySelectFile } from "./ebusiness-verify-select-file";
@NgModule({
  declarations: [
    ebusinessVerifySelectFile
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ebusinessVerifySelectFile)
  ],
  exports: [
    ebusinessVerifySelectFile
  ]
})
export class ebusinessVerifySelectFileModule {
}