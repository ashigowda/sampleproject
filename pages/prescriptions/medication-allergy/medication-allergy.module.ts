import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { medicationAllergy } from './medication-allergy';
import { ComponentsModule } from '../../../shared/components/components.module';

@NgModule({
  declarations: [
    medicationAllergy
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(medicationAllergy)
  ],
  exports: [
    medicationAllergy
  ]
})

export class medicationAllergyModule {
}