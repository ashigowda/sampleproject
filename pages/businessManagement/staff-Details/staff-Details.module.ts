import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { staffDetails } from "./staff-Details";
import { ComponentsModule } from '../../../shared/components/components.module';

@NgModule({
  declarations: [
    staffDetails
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(staffDetails)
  ],
  exports: [
    staffDetails
  ]
})

export class staffDetailsModule {
}