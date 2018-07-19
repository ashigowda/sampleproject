import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { prescriptionAddContactSelect } from "./prescription-add-contact-select";
import { ComponentsModule } from '../../../shared/components/components.module';

@NgModule({
  declarations: [
    prescriptionAddContactSelect
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(prescriptionAddContactSelect)
  ],
  exports: [
    prescriptionAddContactSelect
  ]
})

export class prescriptionAddContactSelectModule {
}