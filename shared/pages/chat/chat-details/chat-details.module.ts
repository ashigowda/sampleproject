import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { chatDetails } from "./chat-details";
import { ComponentsModule } from '../../../components/components.module';


@NgModule({
  declarations: [
    chatDetails
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(chatDetails)
  ],
  exports: [
    chatDetails
  ]
})

export class chatDetailsModule {
}