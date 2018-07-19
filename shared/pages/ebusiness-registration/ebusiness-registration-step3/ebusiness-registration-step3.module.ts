import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../../components/components.module';
import { ebusinessRegistrationStep3 } from "./ebusiness-registration-step3";

@NgModule({
  declarations: [
    ebusinessRegistrationStep3
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ebusinessRegistrationStep3)
  ],
  exports: [
    ebusinessRegistrationStep3
  ]
})
export class ebusinessRegistrationStep3Module {
}