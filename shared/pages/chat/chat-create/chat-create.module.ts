import { NgModule } from '@angular/core';
import {IonicPageModule} from 'ionic-angular'
import { chatCreate } from "./chat-create";
import { ComponentsModule } from '../../../components/components.module';
@NgModule({
  declarations: [
    chatCreate
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(chatCreate)
  ],
  exports: [
    chatCreate
  ]
})

export class chatCreateModule {
}