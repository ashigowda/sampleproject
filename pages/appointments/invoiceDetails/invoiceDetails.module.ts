import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { invoiceDetails } from "./invoiceDetails";
import { ComponentsModule } from '../../../shared/components/components.module';

@NgModule({
  declarations: [
    invoiceDetails
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(invoiceDetails)
  ],
  exports: [
    invoiceDetails
  ]
})

export class invoiceDetailsModule {
}