import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { staffAdd } from "./staff-add";
import { ComponentsModule } from '../../../shared/components/components.module';

@NgModule({
  declarations: [
    staffAdd
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(staffAdd)
  ],
  exports: [
    staffAdd
  ]
})

export class staffAddModule {
}