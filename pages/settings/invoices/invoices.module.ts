import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { invoices } from "./invoices";
import { ComponentsModule } from '../../../shared/components/components.module';

@NgModule({
  declarations: [
    invoices
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(invoices)
  ],
  exports: [
    invoices
  ]
})

export class invoicesModule {
}