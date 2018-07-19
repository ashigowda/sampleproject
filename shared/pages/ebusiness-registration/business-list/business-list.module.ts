import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { businessList } from "./business-list";
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    businessList
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(businessList)
  ],
  exports: [
    businessList
  ]
})

export class businessListModule {
}