import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { contactSearch } from "./contact-search";
import { ComponentsModule } from '../../../shared/components/components.module';

@NgModule({
  declarations: [
    contactSearch
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(contactSearch)
  ],
  exports: [
    contactSearch
  ]
})

export class contactSearchModule {
}