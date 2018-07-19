import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { updateManagement } from "./update-management";
import { ComponentsModule } from '../../../shared/components/components.module';

@NgModule({
  declarations: [
    updateManagement
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(updateManagement)
  ],
  exports: [
    updateManagement
  ]
})

export class updateManagementModule {
}