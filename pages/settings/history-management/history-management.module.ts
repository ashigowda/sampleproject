import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { historyManagement } from "./history-management";
import { ComponentsModule } from '../../../shared/components/components.module';

@NgModule({
  declarations: [
    historyManagement
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(historyManagement)
  ],
  exports: [
    historyManagement
  ]
})

export class historyManagementModule {
}