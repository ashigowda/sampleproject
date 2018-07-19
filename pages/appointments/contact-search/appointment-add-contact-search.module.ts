import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { appointmentAddcontactSearch } from "./appointment-add-contact-search";
import { ComponentsModule } from '../../../shared/components/components.module';

@NgModule({
  declarations: [
    appointmentAddcontactSearch
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(appointmentAddcontactSearch)
  ],
  exports: [
    appointmentAddcontactSearch
  ]
})

export class contactSearchModule {
}