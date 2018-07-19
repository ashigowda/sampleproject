import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { accountManagement } from "./account-management";
import { ComponentsModule } from '../../../shared/components/components.module';

@NgModule({
  declarations: [
    accountManagement
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(accountManagement)
  ],
  exports: [
    accountManagement
  ]
})

export class accountManagementModule {
}