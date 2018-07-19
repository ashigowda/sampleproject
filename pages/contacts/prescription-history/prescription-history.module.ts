import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../../shared/components/components.module';
import { PrescriptionHistory } from './prescription-history';

@NgModule({
  declarations: [
    PrescriptionHistory
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(PrescriptionHistory)
  ],
  exports: [
    PrescriptionHistory
  ]
})

export class PrescriptionHistoryModule {
}