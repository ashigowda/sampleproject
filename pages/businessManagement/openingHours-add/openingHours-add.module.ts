import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { openinghoursAdd } from "./openingHours-add";
import { ComponentsModule } from '../../../shared/components/components.module';

@NgModule({
  declarations: [
    openinghoursAdd
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(openinghoursAdd)
  ],
  exports: [
    openinghoursAdd
  ]
})

export class openinghoursAddModule {
}