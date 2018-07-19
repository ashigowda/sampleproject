import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../../shared/components/components.module';
import { prescriptionItemEdit } from './prescriptionItem-edit';

@NgModule({
  declarations: [
    prescriptionItemEdit
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(prescriptionItemEdit)
  ],
  exports: [
    prescriptionItemEdit
  ]
})

export class prescriptionItemEditModule {
}