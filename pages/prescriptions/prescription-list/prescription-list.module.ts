import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { prescriptionList } from "./prescription-list";
import { ComponentsModule } from '../../../shared/components/components.module';
import { PipesModule } from '../../../pipes/pipes.module';

@NgModule({
  declarations: [
    prescriptionList
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(prescriptionList),PipesModule
  ],
  exports: [
    prescriptionList
  ]
})

export class prescriptionListModule {
}