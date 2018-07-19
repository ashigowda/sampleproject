import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { openinghoursEdit } from "./openinghours-edit";
import { ComponentsModule } from '../../../shared/components/components.module';

@NgModule({
  declarations: [
    openinghoursEdit
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(openinghoursEdit)
  ],
  exports: [
    openinghoursEdit
  ]
})

export class openinghoursEditModule {
}