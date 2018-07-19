import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { healthCondition } from './health-condition';
import { ComponentsModule } from '../../../shared/components/components.module';

@NgModule({
  declarations: [
    healthCondition
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(healthCondition)
  ],
  exports: [
    healthCondition
  ]
})

export class healthConditionModule {
}