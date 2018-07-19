import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../../components/components.module';
import { ebusinessRegistrationStep2 } from "./ebusiness-registration-step2";

@NgModule({
  declarations: [
    ebusinessRegistrationStep2
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ebusinessRegistrationStep2)
  ],
  exports: [
    ebusinessRegistrationStep2
  ]
})
export class ebusinessRegistrationStep2Module {
}