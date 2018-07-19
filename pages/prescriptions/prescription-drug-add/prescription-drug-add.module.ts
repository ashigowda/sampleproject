import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { prescriptionDrugAdd } from "./prescription-drug-add";
import { ComponentsModule } from '../../../shared/components/components.module';

@NgModule({
  declarations: [
    prescriptionDrugAdd
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(prescriptionDrugAdd)
  ],
  exports: [
    prescriptionDrugAdd
  ]
})

export class prescriptionDrugAddModule {
}