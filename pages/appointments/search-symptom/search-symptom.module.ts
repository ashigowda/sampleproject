import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../../shared/components/components.module';
import { searchSymptom } from './search-symptom';

@NgModule({
  declarations: [
    searchSymptom
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(searchSymptom)
  ],
  exports: [
    searchSymptom
  ]
})

export class searchSymptomModule {
}