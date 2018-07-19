import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../../shared/components/components.module';
import { staffEdit } from "./staff-edit";

@NgModule({
  declarations: [
    staffEdit
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(staffEdit)
  ],
  exports: [
    staffEdit
  ]
})

export class staffEditModule {
}