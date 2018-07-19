import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../../components/components.module';
import { ebusinessHomeRegistered } from "./ebusiness-home-registered";

@NgModule({
  declarations: [
    ebusinessHomeRegistered
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ebusinessHomeRegistered)
  ],
  exports: [
    ebusinessHomeRegistered,
  ]
})
export class ebusinessHomeRegisteredModule {
}