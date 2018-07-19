import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { businessManagement } from "./business-management";
import { ComponentsModule } from '../../../shared/components/components.module';

@NgModule({
  declarations: [
    businessManagement
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(businessManagement)
  ],
  exports: [
    businessManagement
  ]
})

export class businessManagementModule {
}