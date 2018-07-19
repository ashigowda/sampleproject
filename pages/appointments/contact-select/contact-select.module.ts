import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { contactSelect } from "./contact-select";
import { ComponentsModule } from '../../../shared/components/components.module';

@NgModule({
  declarations: [
    contactSelect
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(contactSelect)
  ],
  exports: [
    contactSelect
  ]
})

export class contactSelectModule {
}