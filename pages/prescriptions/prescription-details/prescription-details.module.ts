import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { prescriptionDetails } from "./prescription-details";
import { ComponentsModule } from '../../../shared/components/components.module';

@NgModule({
  declarations: [
    prescriptionDetails
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(prescriptionDetails)
  ],
  exports: [
    prescriptionDetails
  ]
})

export class prescriptionDetailsModule {
}