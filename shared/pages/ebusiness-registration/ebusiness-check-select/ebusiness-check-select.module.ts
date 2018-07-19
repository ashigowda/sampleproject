import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../../components/components.module';
import { ebusinessCheckSelect } from "./ebusiness-check-select";

@NgModule({
  declarations: [
    ebusinessCheckSelect
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ebusinessCheckSelect)
  ],
  exports: [
    ebusinessCheckSelect
  ]
})
export class ebusinessCheckSelectModule {
}