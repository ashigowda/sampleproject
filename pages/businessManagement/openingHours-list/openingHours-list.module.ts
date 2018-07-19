import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../../shared/components/components.module';
import { openingHoursList } from './openingHours-list';

@NgModule({
  declarations: [
    openingHoursList
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(openingHoursList)
  ],
  exports: [
    openingHoursList
  ]
})

export class openingHoursListModule {
}