import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../../components/components.module';
import { ebusinessHomeRegister } from "./ebusiness-home-register";

@NgModule({
  declarations: [
    ebusinessHomeRegister
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ebusinessHomeRegister)
  ],
  exports: [
    ebusinessHomeRegister,
  ]
})
export class ebusinessHomeRegisterModule {
}