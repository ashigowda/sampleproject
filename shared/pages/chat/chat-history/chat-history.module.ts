import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { chatHistory } from "./chat-history";
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    chatHistory
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(chatHistory)
  ],
  exports: [
    chatHistory
  ]
})

export class chatHistoryModule {
}