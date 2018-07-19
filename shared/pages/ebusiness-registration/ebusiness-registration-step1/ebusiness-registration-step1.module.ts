import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../../components/components.module';
import { ebusinessRegistrationStep1 } from "./ebusiness-registration-step1";

@NgModule({
  declarations: [
    ebusinessRegistrationStep1
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ebusinessRegistrationStep1)
  ],
  exports: [
    ebusinessRegistrationStep1
  ]
})
export class ebusinessRegistrationStep1Module {
}