import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { invoiceAdd } from "./invoice-add";
import { ComponentsModule } from '../../../shared/components/components.module';

@NgModule({
  declarations: [
    invoiceAdd
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(invoiceAdd)
  ],
  exports: [
    invoiceAdd
  ]
})

export class invoiceAddModule {
}