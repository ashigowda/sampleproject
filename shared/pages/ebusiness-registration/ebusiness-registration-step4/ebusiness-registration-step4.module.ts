import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../../components/components.module';
import { ebusinessRegistrationStep4 } from "./ebusiness-registration-step4";

@NgModule({
  declarations: [
    ebusinessRegistrationStep4
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ebusinessRegistrationStep4)
  ],
  exports: [
    ebusinessRegistrationStep4
  ]
})
export class ebusinessRegistrationStep4Module {
}