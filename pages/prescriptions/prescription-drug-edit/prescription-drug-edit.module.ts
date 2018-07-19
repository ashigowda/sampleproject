import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { prescriptionDrugEdit } from "./prescription-drug-edit";
import { ComponentsModule } from '../../../shared/components/components.module';

@NgModule({
  declarations: [
    prescriptionDrugEdit
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(prescriptionDrugEdit)
  ],
  exports: [
    prescriptionDrugEdit
  ]
})

export class prescriptionDrugEditModule {
}