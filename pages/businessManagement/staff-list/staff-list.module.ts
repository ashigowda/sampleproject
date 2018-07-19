import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StaffList } from "./staff-list";
import { ComponentsModule } from '../../../shared/components/components.module';

@NgModule({
  declarations: [
    StaffList
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(StaffList)
  ],
  exports: [
    StaffList
  ]
})

export class StaffListModule {
}