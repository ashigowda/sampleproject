import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { chatRegister } from "./chat-register";
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    chatRegister
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(chatRegister)
  ],
  exports: [
    chatRegister
  ]
})

export class chatRegisterModule {
}