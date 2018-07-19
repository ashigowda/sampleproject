import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../../components/components.module';
import { ebusinessVerifyUploadDocs } from "./ebusiness-verify-upload-docs";
@NgModule({
  declarations: [
    ebusinessVerifyUploadDocs
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ebusinessVerifyUploadDocs)
  ],
  exports: [
    ebusinessVerifyUploadDocs
  ]
})
export class ebusinessVerifyUploadDocsModule {
}