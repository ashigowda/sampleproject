import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../../shared/components/components.module';
import { FilterModel } from './filter-model';

@NgModule({
  declarations: [
    FilterModel
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(FilterModel)
  ],
  exports: [
    FilterModel
  ]
})

export class filterhModule {
}